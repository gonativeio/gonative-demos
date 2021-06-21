function previewSite() {
  var previewUrl = $("#preview-url").val();
  if (previewUrl) {
    window.open(previewUrl);
  } else {
    $("#preview-url").focus();
  }
}

function setTabNavigation() {
  var tabs = {
    "enabled": true, // set enabled to false to hide the tabs
    "items": [{
      "icon": "fas fa-home", //optional
      "label": "Home",
      "url": "https://test.gonative.io/demo"
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
    url: "https://test.gonative.io/examples",
  }, {
    label: "Push Notifications",
    url: "https://test.gonative.io/push"
  }, {
    label: "Native Plugins",
    url: "https://test.gonative.io/plugins"
  }, {
    label: "FAQ",
    url: "https://test.gonative.io/faq"
  }, {
    label: "Pricing",
    url: "https://test.gonative.io/pricing"
  }];
  var json = JSON.stringify(items);

  window.location.href = "gonative://sidebar/setItems?items=" + encodeURIComponent(json);
}

function setSharePage() {
  var sharePageUrl = "https://gonative.io";
  window.location.href = "gonative://share/sharePage?url=" + encodeURIComponent(sharePageUrl);
}

$(document).ready(function() {
  $("#add-bottom-tab-bar").click(function() { // Bottom Tab Bar
    setTabNavigation();
  });

  $("#add-sidebar-nav").click(function() { // Sidebar Navigation
    $('#top-nav').hide();
    setSidebarNavigation();
  });

  $("#launch-preview").click(function() { // Preview Button
    previewSite();
  });

  $("#share").click(function() { // Share Button
    setSharePage();
  });

  $("#app-settings").click(function() { // Settings Button
    window.location.href = "gonative://open/app-settings";
  });
});