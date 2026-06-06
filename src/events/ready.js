module.exports = (client) => {
  client.once("ready", () => {
    console.log(`✅ NativeHub online como ${client.user.tag}`);
  });
};
