# rogerehmpkesite

## Running Jekyll

`bundle exec jekyll serve`

## Triggering the push to AWS

There are two ways to trigger the push. and invalidating the code

Method 1 — One is simply pushing code to github, this triggers the travis.yml workflow.

Method 2 - The other method is using a script npm run build. In this case I invalidate the code seperatly in AWS cloudfront.