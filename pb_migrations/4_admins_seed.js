/// <reference path="../pb_data/types.d.ts" />

// Seeds the first admin user. Password must be set via PocketBase admin UI
// or by running: docker exec -it pocketbase /pocketbase admin create
migrate(
  (app) => {
    const collection = app.findCollectionByNameOrId('admins');

    // Create the first admin — password will be set via PocketBase admin UI
    // or via the password reset flow. We create with a temporary password.
    const record = new Record(collection, {
      email: 'leoartdev@gmail.com',
      name: 'Leonardo Duque',
      invited_by: '',
      emailVisibility: true,
    });

    // Temporary password — user MUST reset it via PocketBase admin panel
    // Admin UI: http://localhost:8090/_/
    record.setPassword('ChangeMe!23456');

    app.save(record);
  },
  (app) => {
    try {
      const collection = app.findCollectionByNameOrId('admins');
      const record = app.findFirstRecordByData('admins', 'email', 'leoartdev@gmail.com');
      app.delete(record);
    } catch {}
  }
);
