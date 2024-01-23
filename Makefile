LOG_LEVEL ?= info
RENOVATE_CONFIG_FILE ?= example/config.json
IMG ?= renovate:latest

ifndef RENOVATE_TOKEN
$(error $$RENOVATE_TOKEN environment variable must be set)
endif

.PHONY: build
build:
	yarn build

.PHONY: run
run:
	@LOG_LEVEL=${LOG_LEVEL} \
	 RENOVATE_TOKEN=${RENOVATE_TOKEN} \
	 RENOVATE_CONFIG_FILE=${RENOVATE_CONFIG_FILE} \
	 node dist/renovate.js

.PHONY: start
start:
	@LOG_LEVEL=${LOG_LEVEL} \
	 RENOVATE_TOKEN=${RENOVATE_TOKEN} \
	 RENOVATE_CONFIG_FILE=${RENOVATE_CONFIG_FILE} \
	 yarn start

.PHONY: docker-run
docker-run:
	@docker run \
		-it \
	 	-e LOG_LEVEL \
	 	-e RENOVATE_TOKEN \
	 	-e RENOVATE_CONFIG_FILE=${RENOVATE_CONFIG_FILE} \
	 	-v example:/example \
	 	${IMG}

.PHONY: docker-build
docker-build:
	docker build -t ${IMG} .
