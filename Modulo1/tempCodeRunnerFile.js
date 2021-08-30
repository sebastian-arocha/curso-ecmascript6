const persona = {
  nombre: "Sebastian",
  twitter: "@arochaking",
  saludar: function () {
    const siguemeEnTwitter = () =>
      console.log(`Sígueme en Twitter ${this.twitter}`);
    console.log(`Hola, mi nombre es ${this.nombre}`);
    siguemeEnTwitter();
  },
};

persona.saludar();
