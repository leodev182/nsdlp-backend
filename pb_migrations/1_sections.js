/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    name: "sections",
    type: "base",
    fields: [
      { name: "slug",    type: "text",   required: true },
      { name: "label",   type: "text",   required: true },
      { name: "enabled", type: "bool",   required: true },
      { name: "order",   type: "number", required: true },
      { name: "content", type: "json",   required: false },
    ],
    indexes: ["CREATE UNIQUE INDEX idx_sections_slug ON sections (slug)"],
    listRule:   "",   // público puede listar
    viewRule:   "",
    createRule: "@request.auth.id != ''",
    updateRule: "@request.auth.id != ''",
    deleteRule: "@request.auth.id != ''",
  });
  app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("sections");
  app.delete(collection);
});
