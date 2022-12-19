window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
		{url: "apis/account-administration.json", name: "Accounts and Users"},
		{url: "apis/access-policy-management.yaml", name: "Access Control Policies"},
		{url: "apis/job-configuration.yaml", name: "Job Configuration"},
		{url: "apis/agent-management.yaml", name: "Agents and Devices"}
	],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
