setup:
	npx create-react-app siakhooi.github.io
	npm install gh-pages --save-dev
	npm install sass --save-dev
	npm install react-test-renderer --save-dev

clean:
	rm -rf build coverage node_modules

install:
	npm install
lint:
	npx eslint .
test:
	npm test
build:
	npm run build
all: clean install lint test build
