LOG_LEVEL ?= info
RENOVATE_CONFIG_FILE ?= example/config.json
IMG ?= plural-renovate:latest

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

.PHONY: install
install:
	@helm upgrade \
		--install \
		--set config.renovate.token=${RENOVATE_TOKEN} \
		--set config.plural.token=${RENOVATE_API_TOKEN} \
		--set config.renovate.repositories={"floreks/cd-renovate"} \
		--set config.renovate.apiUrl="https://console.cdaws.onplural.sh/gql" \
		plural-renovate \
		charts/plural-renovate


.PHONY: install-oci
install-oci:
	@helm upgrade \
		--install \
		plural-renovate \
		oci://ghcr.io/pluralsh/plural-renovate \
    --version 1.0.3-helm
