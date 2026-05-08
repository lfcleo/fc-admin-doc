# Run And Build

## Run

Two running modes have been set up in the project, which are as follows:
```ssh
npm run dev         # Enable testing environment services
npm run start       # Start formal environmental services
```

## Build

There are two packaging methods set up in the project, as follows:
```ssh
npm run build       # Package to formal environment (basic configuration takes content from the. env. product file)
npm run build:env   # Package into the testing environment (basic configuration takes content from the. env. development file)
```

The packaged project is located in the dist folder.