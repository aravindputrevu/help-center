git clone https://github.com/anshulag206/help-center.git cd help-center
git remote -v
git fetch upstream
for branch in $(git branch -r | grep 'upstream/' | sed 's/ *upstream\///'); do
    git checkout -b $branch upstream/$branch
    git push origin $branch
done
