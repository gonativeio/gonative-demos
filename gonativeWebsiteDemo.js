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
      "url": "https://gonative.io/demo"
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
  var jsonTabs = JSON.stringify(tabs);
  var commands = ['gonative://tabs/setTabs?tabs=' + encodeURIComponent(jsonTabs), 'gonative://tabs/select/0'];
  var jsonCommands = JSON.stringify({urls: commands});
  window.location.href = 'gonative://nativebridge/multi?data=' + encodeURIComponent(jsonCommands);
}

function setSidebarNavigation() {
  var items = [{
    label: "Examples",
    url: "https://gonative.io/examples",
  }, {
    label: "Push Notifications",
    url: "https://gonative.io/push"
  }, {
    label: "Native Plugins",
    url: "https://gonative.io/plugins"
  }, {
    label: "FAQ",
    url: "https://gonative.io/faq"
  }, {
    label: "Pricing",
    url: "https://gonative.io/pricing"
  }];
  var jsonItems = JSON.stringify(items);
  window.location.href = 'gonative://sidebar/setItems?items=' + encodeURIComponent(jsonItems);
}

function sharePage() {
  var sharePageUrl = $("#preview-url").val() || 'https://gonative.io';
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
    sharePage();
  });

  $("#app-settings").click(function() { // Settings Button
    window.location.href = "gonative://open/app-settings";
  });
  
  $("#statusbar-color").click(function() { // Status Bar Button
    window.location.href = "gonative://statusbar/set?style=light&color=1e496e";
  });
  
});
