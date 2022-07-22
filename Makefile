DOCKER_RUN=docker run -it --rm -v ${PWD}:/app -w /app
DOCKER_IMAGE=node:16-alpine

help:
	@echo "make install|run|test|shell"

install:
	@${DOCKER_RUN} ${DOCKER_IMAGE} npm i

run:
	@[ -d "node_modules" ] || make install
	@${DOCKER_RUN} -p 8080:8080 ${DOCKER_IMAGE} npm run serve

shell:
	@${DOCKER_RUN} ${DOCKER_IMAGE} sh

test:
	@${DOCKER_RUN} ${DOCKER_IMAGE} npm run test:unit
