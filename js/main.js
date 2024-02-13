// TAB PANELS
const elsTabsItem = document.querySelectorAll(".tabs__item");
const elsTabsPanel = document.querySelectorAll(".tabs__pannel");
const elsTabLink = document.querySelectorAll(".js-tab-link");

const elsAccordionItemTogler = document.querySelectorAll(".accordion__item-toggler");
const elsAccordionItem = document.querySelectorAll(".accordion__item")

function closeAccordionItems () {
   elsAccordionItem.forEach( function (elAccordionItem) {
    elAccordionItem.classList.remove("accordion__item--open");
   });
};

function deactivateTabItems () {
  elsTabsItem.forEach( function (elTabsItem) {
    elTabsItem.classList.remove("tabs__item--active");
  });
};

function deactivateTabPanel () {
  elsTabsPanel.forEach( function (elTabsPanel) {
    elTabsPanel.classList.remove("tabs__panel--active");
  });
};

elsTabLink.forEach( function (elTabLink) {
  elTabLink.addEventListener("click" , function (evt) {
    //prevent page move
     evt.preventDefault();

    //remove active class item from tabs items
   deactivateTabItems();

    //add active class to current tab__item
    elTabLink.parentElement.classList.add("tabs__item--active")

    // deactivate tabTabPanels
    deactivateTabPanel();

    // show active tab panel
    const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
    elTargetPanel.classList.add("tabs__panel--active");

  });
});


elsAccordionItemTogler.forEach(function (elAccordionItemToggler) {
  elAccordionItemToggler.addEventListener("click", function () {
    closeAccordionItems();

    elAccordionItemToggler.closest('.accordion__item').classList.add('accordion__item--open');
  });
});