import domContentLoaded from 'dom-content-loaded';
import Dispatcher from 'a-dispatcher';
import './lib/polyfill';
import fonts from './fonts';
import {
  validator,
  linkMatchLocation,
  externalLinks,
  scrollTo,
  alertUnload,
  smartPhoto,
  lazyLoad,
  inView,
  modalVideo,
  scrollHint,
  googleMap,
  openStreetMap,
  datePicker,
  postInclude,
  pdfPreview,
  focusedImage,
  unitGroupAlign,
} from './lib/build-in'; // ToDo: いらないものはコメントアウト
import { collapse } from './lib/bootstrap'; // ToDo: いらないものはコメントアウト
// import examplePage from './example';

/**
 * スタイルの読み込み
 */
import 'normalize.css/normalize.css';
import '../scss/site.scss';

/**
 * FontAwesome 5
 */
fonts();

/**
 * Root
 */
window.root = '/';

/**
 * BuildInJs
 * ToDo: 使わない組み込みJSはコメントアウト
 */
if (window.ACMS === undefined) {
  window.dispatch = (context) => {
    validator(context);
    linkMatchLocation(context);
    externalLinks(context);
    scrollTo(context);
    alertUnload(context);
    smartPhoto(context);
    lazyLoad(context);
    inView(context);
    modalVideo(context);
    scrollHint(context);
    googleMap(context);
    openStreetMap(context);
    datePicker(context);
    postInclude(context);
    pdfPreview(context);
    focusedImage(context);
    unitGroupAlign(context);
  };
  window.dispatch(document);
}

/**
 * Bootstrap
 * ToDo: 使わないJSはコメントアウト
 */
const bootstrap = () => {
  collapse();
};
bootstrap();

/**
 * Dispatcher
 */
const dispatcher = new Dispatcher();

// ダイナミックインポート
dispatcher.addRoute('^/app.html$', async () => {
  const { default: appPage } = await import(/* webpackChunkName: "app" */'./containers/app');
  appPage();
});

// 通常のバンドル
// dispatcher.addRoute('^/example/$', examplePage);

dispatcher.run(window.location.pathname);

/**
 * Content Ready
 */
domContentLoaded(() => {
});
