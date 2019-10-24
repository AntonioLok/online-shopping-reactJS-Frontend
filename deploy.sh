#!/bin/bash
S3_BUCKET1="antoniolok.com"
S3_BUCKET2="www.antoniolok.com"

if [[ $TRAVIS_BRANCH == deploy ]]; then

  echo "Deploying to the $S3_BUCKET bucket"
  npm run build
else
  # Don't want to deploy if it's not one of the above branches
  echo "Not deploying"
  exit
fi

# Install the AWS CLI so we can publish to S3
pip install awscli --upgrade --user

# Sync our build folder with our S3 bucket
# --acl public-read says deploy the files with public read access
# --delete says to delete files in the bucket that aren't present in the build folder
#   this ensures that old assets built with webpack with hashed names get deleted
#   when a new build of the app is made and the assets get new hash names
aws s3 sync build/www/ "s3://$S3_BUCKET1" --acl public-read --delete
aws s3 sync build/www/ "s3://$S3_BUCKET2" --acl public-read --delete

# invalidate the now-outdated assets rather than waiting for them to expire
aws cloudfront create-invalidation \
  --distribution-id $CLOUDFRONT_DIST_ID \
  --paths /*