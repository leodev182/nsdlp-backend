/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const col = app.findCollectionByNameOrId("sections");

  const sections = [
    {
      slug: "hero",
      label: "Hero",
      enabled: true,
      order: 1,
      content: {
        location_tag: "ÑUÑOA · REGIÓN METROPOLITANA · CHILE",
        title: "Bienvenidos a\nNuestra Señora de la Paz",
        subtitle: "Bienvenidos a nuestra comunidad de fe.\nUnidos en la oración y el servicio.",
        cta_primary_label: "Ver Calendario",
        cta_secondary_label: "Nuestra Parroquia",
      },
    },
    {
      slug: "horarios",
      label: "Horarios de Misa",
      enabled: true,
      order: 2,
      content: {
        timesbar: [
          { label: "LUNES A SÁBADO", value: "19:30 y 20:00 hrs" },
          { label: "DOMINGO",        value: "10:30 · 12:00 · 20:00 hrs" },
          { label: "DIRECCIÓN",      value: "Av. Echeñique 4243, Ñuñoa" },
          { label: "CONTACTO",       value: "+56 2 2225 7817" },
        ],
      },
    },
    {
      slug: "sacramentos",
      label: "Sacramentos",
      enabled: true,
      order: 3,
      content: {
        cards: [
          { title: "Bautismo",          desc: "El primer sacramento, puerta de la fe y de la vida en Cristo." },
          { title: "Confirmación",      desc: "Fortalece la gracia bautismal y sella al cristiano con el Espíritu Santo." },
          { title: "Eucaristía",        desc: "El centro de la vida cristiana. Cuerpo y Sangre de Cristo." },
          { title: "Matrimonio",        desc: "La unión sagrada entre un hombre y una mujer ante Dios." },
          { title: "Penitencia",        desc: "El sacramento de la reconciliación y el perdón de los pecados." },
          { title: "Unción de Enfermos",desc: "Fortaleza y consuelo para quienes enfrentan la enfermedad." },
        ],
      },
    },
    {
      slug: "colaboracion",
      label: "Noticias y Colaboración",
      enabled: true,
      order: 4,
      content: {
        cards: [
          {
            title: "Súmate al 1% Parroquial",
            body: "Tu contribución mensual del 1% permite sostener las obras de evangelización, el mantenimiento de nuestro templo y la ayuda social comunitaria.",
            cta_label: "Inscribir mi 1%",
            href: "#",
          },
          {
            title: "Campaña de Donaciones",
            body: "Agradecemos tus aportes y colectas para el sostenimiento de nuestras actividades sociales y ayuda a las familias más necesitadas de la comuna.",
            cta_label: "Hacer una Donación",
            href: "#",
          },
        ],
      },
    },
    {
      slug: "contacto",
      label: "Contacto",
      enabled: true,
      order: 5,
      content: {
        heading: "Estamos aquí\npara ti",
        items: [
          { label: "DIRECCIÓN",  value: "Av. Echeñique 4243, Ñuñoa, R.M.", href: null },
          { label: "TELÉFONO",   value: "+56 2 2225 7817",                  href: "tel:+56222257817" },
          { label: "EMAIL",      value: "nuestra.sra.de.la.paz@gmail.com",  href: "mailto:nuestra.sra.de.la.paz@gmail.com" },
          { label: "SECRETARÍA", value: "Pbro. Enrique Bernardo Faúndez V.",href: null },
        ],
      },
    },
    {
      slug: "footer",
      label: "Footer",
      enabled: true,
      order: 6,
      content: {
        name: "Nuestra Señora de la Paz",
        address: "Ñuñoa · Región\nMetropolitana · Chile",
        columns: [
          { title: "LA PARROQUIA", links: [{ label: "Historia", href: "#" }, { label: "Misión y Valores", href: "#" }, { label: "Párroco", href: "#" }, { label: "Equipo pastoral", href: "#" }] },
          { title: "SACRAMENTOS",  links: [{ label: "Bautismo", href: "#" }, { label: "Confirmación", href: "#" }, { label: "Matrimonio", href: "#" }, { label: "Penitencia", href: "#" }] },
          { title: "COMUNIDAD",    links: [{ label: "Noticias", href: "#" }, { label: "Eventos", href: "#" }, { label: "Grupos parroquiales", href: "#" }, { label: "Catequesis", href: "#" }] },
        ],
      },
    },
  ];

  for (const data of sections) {
    const record = new Record(col, data);
    app.save(record);
  }
}, (app) => {
  const col = app.findCollectionByNameOrId("sections");
  const records = app.findAllRecords("sections");
  for (const r of records) app.delete(r);
});
