import '../components/header.tag'

<home>
  <header></header>
  <h2>this is material-input</h2>
  <material-input type="email" label="Email"></material-input>
  <material-input type="password" label="Mot de passe"></material-input>
  <script>
    this.on('mount', () => {
      console.log('mount: home.tag - route: %s', riot.routeState.view)
    })
  </script>
</home>
