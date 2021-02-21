first:
	echo "# node_graphql" >> README.md
	git init
	git add README.md
	git add .
	git commit -m "first commit"
	git branch -M main
	git remote add origin https://github.com/vongkeo/node_graphql.git
	git push -u origin main

git:
	git add .
	git commit -m "$m"
	git push