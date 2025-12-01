setup:
	npx create-react-app siakhooi.github.io
	npm install gh-pages --save-dev
	npm install sass --save-dev
	npm install react-test-renderer --save-dev

clean:
	rm -rf build coverage

install:
	npm install
lint:
	npx eslint .
test:
	npm test
build:
	npm run build
all: clean set-version install lint test build

w3-css:
	curl -L -o src/w3-theme.css https://www.w3schools.com/lib/w3-theme-light-blue.css
	curl -L -o src/w3.css https://www.w3schools.com/w3css/5/w3.css
.PHONY: build

set-version:
	scripts/set-version.sh
commit:
	scripts/git-commit-and-push.sh
release:
	scripts/create-release.sh
