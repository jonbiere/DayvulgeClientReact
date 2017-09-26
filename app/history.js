import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';

export default createBrowserHistory(); //process.env.BROWSER ? createBrowserHistory() : createMemoryHistory();