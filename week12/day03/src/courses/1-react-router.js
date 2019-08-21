// 1. 安装 react-router-dom: yarn add react-router-dom --save

// 2. 我们需要使用 ReactRouter 的容器组件
// 2.1 BrowerRouter 基于浏览器的 history API， history 模式，路径没有 # 号
// 2.2 HashRouter 通过 hash 方式路由，路径后面有 # 号
// 2.3 MemoryRouter 在内存中管理路由。主要在 ReactNative 中用

// 3. 跑通基本路由：
// 3.1 从 react-router-dom 上面导入 HashRouter, Route 组件
// 3.2 HashRouter 尽量放在应用的顶层，HashRouter 要接收一个字节点
// 3.3 在 HashRouter 下面配置 Route, Route 组件有两个属性， path  和 component , Route 的组件的作用，当页面中的路径（hashRouter # 后面的就是路径）和 Route 的 path 属性的值一致时就会渲染 component 对应的组件

// 4. 路由的匹配规则：把页面地址栏中的路径从 /hoem 变为 /home/abc , 发现 Home 组件依然在页面中，这是因为路由是模糊匹配的，只要看开头匹配，就认为匹配成功显示对应的组件，如果有一个组件，你想在任何地方都显示，把它的 path 设为 / 即可

// 5. link 组件: 功能和 VueRouter 的 router-link组件的功能类似，设置一个 to 属性，点击它的时候可以把页面中 url 的路径切换到 to 属性指定的路径
// Link 组件会被渲染成一个 a 标签，但是开发的时候尽量不要写 a 标签，因为路由不仅有 hash 模式还是 history 模式，写 link 会根据模式切换路径

// 6. 嵌套路由：例如在某个页面下面还有二级导航，例如 /user 下面有 /user/add 和 /user/list
// 6.1 如果在 /User 下面有嵌套路由，我们需要在 /user 对应的组件中添加 Route 组件， 新添加的 Route 组件的 path 是嵌套路由，如 /user/add component 就是嵌套路由对应的组件

// 7. 用代码切路由: 所有被路由渲染的组件,它的 props 中都有路由的信息,通过 props 可以取得路由信息,其中 props.history.push() 是用来切换路由的,参数接收一个你想去往的路径

// 8. 动态路由： 动态路由路径中有一段是不固定的， /user/detail/:id, 最后这一段 /:id 就是动态路由，动态路由就是用来传递数据的,这个路由一般也是嵌套的所以还需要配置 Route 组件,在路由对应的组件中如果要获取动态路由参数 props.match.params 对象, 属性名是 : 后面的值, 属性值是 Route 传过来的值

// 9.路由的匹配:
// 默认的路由匹配时是模糊匹配的,如果我们希望它精确匹配,需要在精确匹配对应的 Route 上增加 exact 属性
// Route 组件上有一个 render 属性,它的值是一个函数,这个函数要返回一个 jsx 或者一个组件,当页面 url 中的路径和 route 的 path 匹配的时候,就会执行这个 render 对应的函数,并且把它返回的 jsx 元素或者组件渲染到页面中, render 充当一个组件的作用

// 当我们需要它匹配到一个路由后,后面的就不要再匹配了,此时我们需要一个 Switch 组件, Switch 组件也是 react-router-dom 的内置组件, 导出后才能使用
// 这些 Router 组件要放在 Switch 组件的里面

// 设置 NOT FOUND 页面:
// 设置 Route 组件,但是不设置 path 属性,只设置 component 属性,当所有其他带有 path 的 Route 都没能匹配到当前页面的路径时,就会渲染这个没有 path 的 Route 对应的 component 