const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));


function handleClick(event) {
    // hide all panels  and mark them as unselected 
    tabPanels.forEach(panel => {
        panel.hidden = true;
    });

    tabButtons.forEach(tab => {
        tab.setAttribute('aria-selected', false);
      });
    
    // to mark only one selected 
    event.currentTarget.setAttribute('aria-seletected', true);
    const { id } = event.currentTarget;
    const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    tabPanel.hidden = false;
} 

tabButtons.forEach(button => button.addEventListener('click', handleClick));