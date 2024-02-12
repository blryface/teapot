app.all('*', (req, res) => {
  res
    .status(418)
    .send();
});
