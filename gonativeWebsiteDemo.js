function previewSite() {
  var previewUrl = $("#preview-url").val();
  if (previewUrl) {
    window.open(previewUrl);
  } else {
    alert("Please provide a url to preview in this app.")
  }
}

function setTabNavigation() {
  var tabs = {
    "enabled": true, // set enabled to false to hide the tabs
    "items": [{
      "icon": "fas fa-home", //optional
      "label": "Home",
      "url": "https://gonativeio.webflow.io/"
    }, {
      "icon": "fas fa-globe", //optional
      "label": "Your Site",
      "url": "javascript:previewSite()"
    }, {
      "icon": "fas fa-book-open", //optional
      "label": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Main_Page"
    }]
  };

  var json = JSON.stringify(tabs);
  window.location.href = 'gonative://tabs/setTabs?tabs=' + encodeURIComponent(json);
}

function setSidebarNavigation() {
  var items = [{
    label: "Examples",
    url: "https://gonativeio.webflow.io/examples",
  }, {
    label: "Push Notifications",
    url: "https://gonativeio.webflow.io/push"
  }, {
    label: "Native Plugins",
    url: "https://gonativeio.webflow.io/plugins"
  }, {
    label: "FAQ",
    url: "https://gonativeio.webflow.io/faq"
  }, {
    label: "Pricing",
    url: "https://gonativeio.webflow.io/pricing"
  }];
  var json = JSON.stringify(items);

  window.location.href = "gonative://sidebar/setItems?items=" + encodeURIComponent(json);
}

$(document).ready(function() {
  $(".col.hero-left a").eq(0).click(function() { // 1st button - Bottom Tab Bar
    setTabNavigation();
  });

  $(".col.hero-left a").eq(1).click(function() { // 2nd button - Sidebar Navigation
    setSidebarNavigation();
  });

  $("#build-form :submit").click(function() { // Preview Button
    previewSite();
  });
});