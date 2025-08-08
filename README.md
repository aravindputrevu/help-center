git clone https://github.com/anshulag206/help-center.git cd help-center
git remote -v
git fetch upstream
for branch in $(git branch -r | grep 'upstream/' | sed 's/ *upstream\///'); do
    git checkout -b $branch upstream/$branch
    git push origin $branch
done
git checkout -b add-utils
mkdir python
cd python
notepad python/simple_utils.py
cd ..
git add python/simple_utils.py
git commit -m "Add simple_utils.py with utility functions"
git push origin add-utils
