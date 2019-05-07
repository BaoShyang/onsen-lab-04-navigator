// function gotoPage2() {
//   console.log('test...');
//   $('#myNavigator')[0].pushPage('page2.html');
// }

document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'page1') {
    page.querySelector('#push-button').onclick = function() {
      document
        .querySelector('#myNavigator')
        .pushPage('page2.html', { data: { title: 'Page 2' } });
    };
    page.querySelector('#sayhello-button').onclick = function() {
      ons.notification.toast('Hello there', { timeout: 2000 });
    };
  } else if (page.id === 'page2') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    page.querySelector('#page2-button').onclick = function() {
      var content =
        '<p style="text-align: center">Hi, this is page 2 message</p>';
      content +=
        '<p style="text-align: center"><ons-button id="dynamic-button">Dyanamic Button</ons-button></p>';
      page.querySelector('#page2-message').innerHTML = content;
      page.querySelector('#dynamic-button').onclick = function() {
        ons.notification.toast('Dynamic button clicked', { timeout: 2000 });
      };
      //----method 1----//

      // page.querySelector('#page2-message').innerHTML =
      //   '<p style="text-align: center">Hi, this is page 2 message</p>';
      //----method 2----//
    };
  }
});

// lifecyle: init, show, hide, destroy
