/// <reference path="../pb_data/types.d.ts" />

migrate(
  (app) => {
    const collection = new Collection({
      name: 'admins',
      type: 'auth',
      fields: [
        { name: 'name', type: 'text', required: false },
        { name: 'invited_by', type: 'text', required: false },
      ],
      // Nobody can self-register. Existing admins create new admins via API.
      createRule: null,
      listRule: '@request.auth.id != ""',
      viewRule: '@request.auth.id != ""',
      updateRule: '@request.auth.id = id',
      deleteRule: null,
      authRule: '',
      passwordAuth: { enabled: true, identityFields: ['email'] },
      oauth2: { enabled: false },
    });

    app.save(collection);
  },
  (app) => {
    const collection = app.findCollectionByNameOrId('admins');
    app.delete(collection);
  }
);
