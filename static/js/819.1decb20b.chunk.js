"use strict";(self.webpackChunk_kie_chain_status_webpage=self.webpackChunk_kie_chain_status_webpage||[]).push([[819],{1819:function(e,t,a){a.r(t),a.d(t,{CrossPullRequestList:function(){return l}});var n=a(6234),r=a(3712),u=a(969),s=a(9369),c=a(7574),i=u.lazy((function(){return a.e(447).then(a.bind(a,8447))})),l=function(e){var t=(0,u.useState)([]),a=(0,n.Z)(t,2),l=a[0],o=a[1],d=(0,u.useState)(!0),h=(0,n.Z)(d,2),f=h[0],p=h[1],b=(0,s.v9)((function(e){return e.pullrequestFilter.filteredData}));return(0,u.useEffect)((function(){p(!0),b.projects&&e.headBranch&&(o(b.projects.flatMap((function(t){return t.pullRequests.filter((function(t){return e.headBranch&&t.head.label===e.headBranch.label})).map((function(e){return e.project=t,e}))}))),p(!1))}),[b,e.headBranch]),(0,c.jsx)(r.ZP,{className:"demo-loadmore-list",itemLayout:"vertical",dataSource:l,loading:f,renderItem:function(t){return(0,c.jsx)(i,{pullRequest:t,hideMetadata:e.hideMetadata,showProject:e.showProject,loading:!1,hideUserAvatar:!1},t.number)}})};t.default=l}}]);
//# sourceMappingURL=819.1decb20b.chunk.js.map