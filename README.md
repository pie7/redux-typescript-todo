This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Overview

Todo App


### `Features`

- ADD/EDIT/DELETE Task


### `Tools`

- React-Route
- Redux
- TypeScript
- CSS Module
- Jest/Enzyme


### `Doc`

```js
import DeleteButton from './DeleteButton'
```
Name         | Type     | Default
------------ | -------- | -------
id           | number   |

```js
import Header from './Header'
```
Name         | Type     | Default
------------ | -------- | -------
title        | string   |

```js
import Navigation from './Navigation'
```
Name         | Type     | Default
------------ | -------- | -------
links        | array    |

```js
import TaskInput from './TaskInput'
```
Name         | Type     | Default
------------ | -------- | -------
currentInput | string   |
keyinInput   | func     |
addTask      | func     |

```js
import TodoCard from './TodoCard'
```
Name         | Type     | Default
------------ | -------- | -------
id           | number   |
title        | string   |
isComplete   | bool     |
toggleTask   | func     |

```js
import TodoContainer from './TodoContainer'
```
Name         | Type     | Default
------------ | -------- | -------
todos        | array    |