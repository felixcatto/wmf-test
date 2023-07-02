start:
	npx webpack serve

start-prod:
	npx servor dist/public index.html 3000

build:
	NODE_ENV=production npx webpack

analyze-bundle:
	NODE_ENV=production ANALYZE=true npx webpack

lint:
	npx eslint .
	npx tsc

prettier:
	npx prettier --write .

generateApiTypings:
	npx openapi-typescript https://petstore3.swagger.io/api/v3/openapi.json \
	  -o ./client/lib/apiTypes/schema.d.ts
