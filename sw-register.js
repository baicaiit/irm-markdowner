/**
 * @file serviceworker register
 * @author *__ author __*{% if: *__ email __* %}(*__ email __*){% /if %}
 */

/* global navigator, document */

// 注册的地址为 sw-precache-webpack-pulgin 生成的 service-worker.js 或者自己手动维护的 service worker 文件
navigator.serviceWorker && navigator.serviceWorker.register('/service-worker.js').then(() => {
    navigator.serviceWorker.addEventListener('message', e => {

        // service-worker.js 如果更新成功会 postMessage 给页面，内容为 'sw.update'
        if (e.data === 'sw.update') {
            let themeColor = document.querySelector('meta[name=theme-color]');
            let dom = document.createElement('div');

            themeColor && (themeColor.content = '#000');

            /* eslint-disable max-len */
            // dom.innerHTML = `
            //     <style>
            //         .app-refresh{background:#000;height:0;line-height:52px;overflow:hidden;position:fixed;top:0;left:0;right:0;z-index:10001;padding:0 18px;transition:all .3s ease;-webkit-transition:all .3s ease;-moz-transition:all .3s ease;-o-transition:all .3s ease;}
            //         .app-refresh-wrap{display:flex;color:#fff;font-size:15px;}
            //         .app-refresh-wrap label{flex:1;}
            //         .app-refresh-show{height:52px;}
            //         .app-refresh-label{color:#aaa;}
            //         .app-refresh-btn{cursor:pointer;}
            //     </style>
            //     <div class="app-refresh" id="app-refresh">
            //         <div class="app-refresh-wrap" onclick="location.reload()">
            //             <label class="app-refresh-label">已更新最新版本</label>
            //             <span class="app-refresh-btn">点击刷新⚡️</span>
            //         </div>
            //     </div>
            // `;
            /* eslint-enable max-len */

            weui.confirm('已更新最新版本，是否立即刷新？', {
                 title: '更新提示',
                 buttons: [{
                    label: '暂不',
                    type: 'default',
                    onClick: function(){ ; }
                 }, {
                    label: '确认',
                    type: 'primary',
                    onClick: function(){ location.reload(); }
                 }],
            });
            // document.body.appendChild(dom);
            // setTimeout(() => document.getElementById('app-refresh').className += ' app-refresh-show');
        }
    });
});
