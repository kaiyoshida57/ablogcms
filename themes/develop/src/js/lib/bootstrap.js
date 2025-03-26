import domContentLoaded from 'dom-content-loaded';

/**
 * Collapse
 */
const collapse = () => {
  domContentLoaded(() => {
    const targets = document.querySelectorAll('[data-bs-toggle="collapse"]');
    if (targets.length > 0) {
      import(/* webpackChunkName: "bootstrap-collapse" */ 'bootstrap/js/dist/collapse');
    }
  });
};

// eslint-disable-next-line import/prefer-default-export
export { collapse };
