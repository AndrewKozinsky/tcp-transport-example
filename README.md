## Description
Minimal example of TCP Transport work in NestJS.

## Project setup
Install all dependencies:
```bash
$ yarn
```

Run customer microservice first on 3001 port:
```bash
$ yarn run start:dev consumer
```

Then run main server on 3000 port:
```bash
$ yarn run start:dev main
```

Services will exchange messages each other. Result will be shown in the Console.