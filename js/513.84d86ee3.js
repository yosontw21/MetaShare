"use strict";(self["webpackChunkmetahare_front"]=self["webpackChunkmetahare_front"]||[]).push([[513],{6720:function(s,e){e["Z"]={data(){return{followingList:[]}},methods:{getFollow(){this.isLoading=!0;const s=document.cookie.split("jwt=").pop();this.$http({method:"GET",url:"https://metashare.onrender.com/api/users/getFollowingList",headers:{Authorization:`Bearer ${s}`}}).then((s=>{this.isLoading=!1,this.followingList=s.data.data.following})).catch((s=>{console.log(s)}))}},created(){this.getFollow()}}},1617:function(s,e){e["Z"]={data(){return{followersList:[]}},methods:{getFollowers(){this.isLoading=!0;const s=document.cookie.split("jwt=").pop();this.$http({method:"GET",url:"https://metashare.onrender.com/api/users/getFollowersList",headers:{Authorization:`Bearer ${s}`}}).then((s=>{this.isLoading=!1,this.followersList=s.data.data.followers})).catch((s=>{console.log(s)}))}},created(){this.getFollowers()}}},9236:function(s,e,t){t.d(e,{Z:function(){return O}});var l=t(3396),o=t(7139),a=t(9242);const i={class:"fixed-top container-fluid d-flex justify-content-between align-items-center py-sm-2 px-sm-8 px-3 py-3 bg-white shadow-sm"},d={class:"d-md-block d-none"},r={class:"d-flex align-items-center"},n={class:"me-4"},c=(0,l._)("span",{class:"material-icons fs-xl"}," home ",-1),m={class:"dropdown h-primary-100 rounded-pill p-1"},p={type:"button",class:"d-flex align-items-center border border-0 bg-transparent","data-bs-toggle":"dropdown","aria-expanded":"false"},u={class:"me-2 userAvatar rounded-circle",style:{width:"40px",height:"40px"}},f=["src"],g={class:"userName"},h={class:"dropdown-menu py-0"},_={class:"border-bottom"},b=(0,l._)("span",{class:"material-icons fs-lg me-1"}," notifications ",-1),w=(0,l._)("p",{class:"fs-xs fw-bold"},"追蹤名單",-1),x={class:"border-bottom"},v=(0,l._)("span",{class:"material-icons fs-lg me-1"}," favorite ",-1),y=(0,l._)("p",{class:"fs-xs fw-bold"},"喜歡貼文",-1),k={class:"border-bottom"},P=(0,l._)("span",{class:"material-icons fs-lg me-1"}," account_circle ",-1),L=(0,l._)("p",{class:"fs-xs fw-bold"},"個人貼文牆",-1),D={class:"border-bottom"},$=(0,l._)("span",{class:"material-icons fs-lg me-1"}," edit_square ",-1),C=(0,l._)("p",{class:"fs-xs fw-bold"},"編輯個人資料",-1),U={class:"",style:{cursor:"pointer"}},z=(0,l._)("span",{class:"material-icons fs-lg ms-1 me-1"}," logout ",-1),j=(0,l._)("p",{class:"fs-xs fw-bold"},"登出",-1),W=[z,j],F={class:"fixed-bottom d-md-none d-block d-flex justify-content-center w-100 bg-white px-4 rounded-top-xl shadow-footer"},M={class:"navbar-footer d-flex justify-content-between align-items-center py-2"},Z=(0,l._)("div",null,[(0,l._)("span",{class:"material-icons fs-3xl"}," home ")],-1),E=(0,l._)("div",null,[(0,l._)("span",{class:"material-icons fs-3xl"}," favorite ")],-1),q=(0,l._)("div",{class:""},[(0,l._)("span",{class:"material-icons fs-3xl"}," people ")],-1),A=(0,l._)("div",{class:""},[(0,l._)("span",{class:"material-icons fs-3xl"}," notifications ")],-1),H=(0,l._)("div",null,[(0,l._)("span",{class:"material-icons fs-3xl"}," person ")],-1);function T(s,e,t,z,j,T){const B=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",i,[(0,l._)("h1",null,[(0,l.Wm)(B,{to:"/post",class:"bg-cover logo"})]),(0,l._)("div",d,[(0,l._)("div",r,[(0,l._)("div",n,[(0,l.Wm)(B,{to:"/post",class:"border border-primary rounded-circle p-2 home"},{default:(0,l.w5)((()=>[c])),_:1})]),(0,l._)("div",m,[(0,l._)("button",p,[(0,l._)("div",u,[(0,l._)("img",{src:s.profile.avatar,alt:"",style:{width:"40px",height:"40px"},class:"rounded-circle"},null,8,f)]),(0,l._)("div",g,(0,o.zw)(s.profile.name),1)]),(0,l._)("ul",h,[(0,l._)("li",_,[(0,l.Wm)(B,{class:"dropdown-item d-flex align-items-center text-dark-800 py-2",to:"/follow"},{default:(0,l.w5)((()=>[b,w])),_:1})]),(0,l._)("li",x,[(0,l.Wm)(B,{class:"dropdown-item d-flex align-items-center text-dark-800 py-2",to:"/likesPost"},{default:(0,l.w5)((()=>[v,y])),_:1})]),(0,l._)("li",k,[(0,l.Wm)(B,{class:"dropdown-item d-flex align-items-center text-dark-800 py-2",to:`/profile/${s.profile._id}`},{default:(0,l.w5)((()=>[P,L])),_:1},8,["to"])]),(0,l._)("li",D,[(0,l.Wm)(B,{class:"dropdown-item d-flex align-items-center text-dark-800 py-2",to:"/updateUser"},{default:(0,l.w5)((()=>[$,C])),_:1})]),(0,l._)("li",U,[(0,l._)("a",{onClick:e[0]||(e[0]=(0,a.iM)(((...s)=>T.logOut&&T.logOut(...s)),["prevent"])),class:"dropdown-item d-flex align-items-center text-dark-800 py-2"},W)])])])])])]),(0,l._)("div",F,[(0,l._)("div",M,[(0,l.Wm)(B,{to:"/post","active-class":"is-active",class:(0,o.C_)([["profile"===s.$route.name?"is-active":""],"text-dark rounded-top"])},{default:(0,l.w5)((()=>[Z])),_:1},8,["class"]),(0,l.Wm)(B,{to:"/likesPost","active-class":"is-active",class:"text-dark rounded-top"},{default:(0,l.w5)((()=>[E])),_:1}),(0,l.Wm)(B,{to:"/followers","active-class":"is-active",class:"text-dark"},{default:(0,l.w5)((()=>[q])),_:1}),(0,l.Wm)(B,{to:"/follow","active-class":"is-active",class:"text-dark"},{default:(0,l.w5)((()=>[A])),_:1}),(0,l.Wm)(B,{to:"/list","active-class":"is-active",class:(0,o.C_)([["updateUser"===s.$route.name?"is-active":""],"text-dark"])},{default:(0,l.w5)((()=>[H])),_:1},8,["class"])])])],64)}var B=t(6732),I={data(){return{link:""}},mixins:[B.Z],methods:{logOut(){this.$http({method:"GET",url:"https://metashare.onrender.com/api/users/logout"}).then((s=>{"success"===s.data.status&&(document.cookie="jwt=; path=/",this.$router.push("/login"))})).catch((s=>{console.log(s)}))}}},Y=t(89);const K=(0,Y.Z)(I,[["render",T]]);var O=K},7513:function(s,e,t){t.r(e),t.d(e,{default:function(){return Tt}});var l=t(3396),o=t(7139);const a={class:"w-100 bg-light h-100 pb-md-10 pb-19"},i={class:"container pt-md-5 pt-10 d-flex flex-column flex-md-row"},d={class:"infoCard"},r={class:"w-100 bg-white py-3 px-4 shadow-lg rounded-2 w-100 mb-md-0 mb-4"},n=(0,l._)("p",{class:"text-primary fw-bold fs-lg mb-4"},"關於",-1),c=(0,l._)("div",{class:"w-100 t-border d-block mb-4"},null,-1),m={class:"mb-4"},p={class:"w-100 ms-md-9 ms-0"},u={key:0,class:"w-100 mb-6"},f={class:"d-flex align-items-center rounded-2 p-3 shadow-lg bg-white"},g={class:"rounded-circle me-3",style:{height:"48px",width:"48px"}},h=["src"];function _(s,e,t,_,b,w){const x=(0,l.up)("Loading"),v=(0,l.up)("ProfileHeader"),y=(0,l.up)("createPostModal"),k=(0,l.up)("PersonPosts");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(x,{active:s.isLoading},null,8,["active"]),(0,l._)("div",a,[(0,l.Wm)(v,{id:s.id},null,8,["id"]),(0,l._)("div",i,[(0,l._)("div",d,[(0,l._)("div",r,[n,c,(0,l._)("p",m,(0,o.zw)(s.personProfile.personalInfo),1)])]),(0,l._)("div",p,[s.profile._id===s.personProfile._id?((0,l.wg)(),(0,l.iD)("div",u,[(0,l._)("div",f,[(0,l._)("div",g,[(0,l._)("img",{alt:"",src:s.profile.avatar,style:{height:"48px",width:"48px"},class:"rounded-circle"},null,8,h)]),(0,l._)("button",{type:"button",class:"w-100 rounded-4 border-0 text-start ps-5 py-2 text-black-50",onClick:e[0]||(e[0]=e=>s.openPostModal(!0))}," 今天在想什麼呢? ")])])):(0,l.kq)("",!0),(0,l.Wm)(y,{ref:"createPostModal",post:s.tempPost,onCreatePost:s.createPost},null,8,["post","onCreatePost"]),(0,l.Wm)(k,{id:s.id},null,8,["id"])])])])],64)}const b={class:"container-fluid pt-20 shadow-lg rounded-bottom-xl"},w={class:"container flex-column align-items-center flex-md-row d-flex justify-content-md-between align-items-md-center pb-md-4 pb-8"},x={class:"d-md-flex align-items-md-center"},v={class:"rounded-circle me-md-7 me-0 d-flex justify-content-center d-md-block"},y=["src"],k={class:"mt-md-10 mt-5"},P={class:"fs-2xl fw-bold text-center text-md-start"},L={class:"d-flex"},D={key:0,type:"button",class:"text-dark fs-xs btn-none","data-bs-toggle":"modal","data-bs-target":"#userFollowing"},$=(0,l.Uk)(" 正在追蹤 "),C={class:"fs-sm fw-bold text-primary"},U=(0,l.Uk)(" 人 "),z={key:1,type:"button",class:"text-dark fs-xs btn-none","data-bs-toggle":"modal","data-bs-target":"#otherUserFollowing"},j=(0,l.Uk)(" 正在追蹤 "),W={class:"fs-sm fw-bold text-primary"},F=(0,l.Uk)(" 人 "),M=(0,l._)("div",{class:"m-border"},null,-1),Z={key:2,type:"button",class:"text-dark fs-xs btn-none","data-bs-toggle":"modal","data-bs-target":"#userFollowers"},E={class:"fs-sm fw-bold text-primary"},q=(0,l.Uk)(" 位追蹤者 "),A={key:3,type:"button",class:"text-dark fs-xs btn-none","data-bs-toggle":"modal","data-bs-target":"#otherUserFollowers"},H={class:"fs-sm fw-bold text-primary"},T=(0,l.Uk)(" 位追蹤者 "),B={key:0,class:""},I={key:0,class:"mt-8"},Y=(0,l._)("span",{class:"material-icons fs-lg me-1"}," notifications ",-1),K=(0,l.Uk)(" 追蹤 "),O=[Y,K],G={key:1,class:""},N={key:0,class:"mt-8"},S=(0,l._)("span",{class:"material-icons fs-lg me-1"}," notifications_off ",-1),V=(0,l.Uk)(" 取消追蹤 "),J=[S,V],Q={key:2,class:""},R={class:"mt-8"},X=(0,l._)("span",{class:"material-icons fs-lg me-1"}," edit_square ",-1),ss=(0,l.Uk)(" 編輯個人資料 "),es={class:"modal fade",id:"userFollowing",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},ts={class:"modal-dialog modal-dialog-scrollable"},ls={class:"modal-content"},os=(0,l._)("div",{class:"modal-header"},[(0,l._)("h5",{class:"modal-title text-primary fw-bold fs-xl",id:"exampleModalLabel"}," 追蹤名單 "),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),as={class:"modal-body"},is={key:0,class:"fs-xs text-dark-800 d-flex align-items-center justify-content-center py-10"},ds={class:"d-flex align-items-center pb-3"},rs={class:"d-flex align-items-center w-100"},ns={class:"rounded-circle me-2"},cs=["src"],ms={class:""},ps={class:""},us=["onClick"],fs={class:"modal fade",id:"userFollowers",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},gs={class:"modal-dialog modal-dialog-scrollable"},hs={class:"modal-content"},_s=(0,l._)("div",{class:"modal-header"},[(0,l._)("h5",{class:"modal-title text-primary fw-bold fs-xl",id:"exampleModalLabel"}," 粉絲名單 "),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),bs={class:"modal-body"},ws={key:0,class:"fs-xs text-dark-800 d-flex align-items-center justify-content-center py-10"},xs={class:"d-flex align-items-center pb-3"},vs={class:"d-flex align-items-center w-100"},ys={class:"rounded-circle me-2"},ks=["src"],Ps={class:""},Ls={class:""},Ds=["onClick"],$s={class:"modal fade",id:"otherUserFollowing",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Cs={class:"modal-dialog modal-dialog-scrollable"},Us={class:"modal-content"},zs=(0,l._)("div",{class:"modal-header"},[(0,l._)("h5",{class:"modal-title text-primary fw-bold fs-xl",id:"exampleModalLabel"}," 追蹤名單 "),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),js={class:"modal-body"},Ws={key:0,class:"fs-xs text-dark-800 d-flex align-items-center justify-content-center py-10"},Fs={class:"d-flex align-items-center pb-3"},Ms={class:"d-flex align-items-center w-100"},Zs={class:"rounded-circle me-2"},Es=["src"],qs={class:""},As={class:"modal fade",id:"otherUserFollowers",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Hs={class:"modal-dialog modal-dialog-scrollable"},Ts={class:"modal-content"},Bs=(0,l._)("div",{class:"modal-header"},[(0,l._)("h5",{class:"modal-title text-primary fw-bold fs-xl",id:"exampleModalLabel"}," 粉絲名單 "),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Is={class:"modal-body"},Ys={key:0,class:"fs-xs text-dark-800 d-flex align-items-center justify-content-center py-10"},Ks={class:"d-flex align-items-center pb-3"},Os={class:"d-flex align-items-center w-100"},Gs={class:"rounded-circle me-2"},Ns=["src"],Ss={class:""};function Vs(s,e,t,a,i,d){const r=(0,l.up)("Navbar"),n=(0,l.up)("Loading"),c=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(r),(0,l._)("div",b,[(0,l.Wm)(n,{active:s.isLoading},null,8,["active"]),(0,l._)("div",w,[(0,l._)("div",x,[(0,l._)("div",v,[(0,l._)("img",{alt:"",class:"rounded-circle border border-2 border-primary",style:{width:"136px",height:"136px"},src:s.personProfile.avatar},null,8,y)]),(0,l._)("div",k,[(0,l._)("p",P,(0,o.zw)(s.personProfile.name),1),(0,l._)("div",L,[s.profile._id===s.personProfile._id?((0,l.wg)(),(0,l.iD)("button",D,[$,(0,l._)("span",C,(0,o.zw)(s.followingList.length),1),U])):(0,l.kq)("",!0),s.profile._id!==s.personProfile._id?((0,l.wg)(),(0,l.iD)("button",z,[j,(0,l._)("span",W,(0,o.zw)(s.following.length),1),F])):(0,l.kq)("",!0),M,s.profile._id===s.personProfile._id?((0,l.wg)(),(0,l.iD)("button",Z,[(0,l._)("span",E,(0,o.zw)(s.followersList.length),1),q])):(0,l.kq)("",!0),s.profile._id!==s.personProfile._id?((0,l.wg)(),(0,l.iD)("button",A,[(0,l._)("span",H,(0,o.zw)(s.followers.length),1),T])):(0,l.kq)("",!0)])])]),-1===i.isFollow?((0,l.wg)(),(0,l.iD)("div",B,[s.profile._id!==s.personProfile._id?((0,l.wg)(),(0,l.iD)("div",I,[(0,l._)("button",{type:"button",onClick:e[0]||(e[0]=(...e)=>s.followUser&&s.followUser(...e)),class:"btn--primary"},O)])):(0,l.kq)("",!0)])):((0,l.wg)(),(0,l.iD)("div",G,[s.profile._id!==s.personProfile._id?((0,l.wg)(),(0,l.iD)("div",N,[(0,l._)("button",{type:"button",class:"btn--primary",onClick:e[1]||(e[1]=(...e)=>s.unfollowUser&&s.unfollowUser(...e))},J)])):(0,l.kq)("",!0)])),s.profile._id===s.personProfile._id?((0,l.wg)(),(0,l.iD)("div",Q,[(0,l._)("div",R,[(0,l.Wm)(c,{to:"/updateUser",class:"btn--primary"},{default:(0,l.w5)((()=>[X,ss])),_:1})])])):(0,l.kq)("",!0)])]),(0,l._)("div",es,[(0,l._)("div",ts,[(0,l._)("div",ls,[os,(0,l._)("div",as,[s.followingList.length<=0?((0,l.wg)(),(0,l.iD)("div",is," 還沒有追蹤任何人喔 ")):(0,l.kq)("",!0),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.followingList,(s=>((0,l.wg)(),(0,l.iD)("div",{class:"w-100 border-bottom mb-3",key:s.user._id},[(0,l._)("div",ds,[(0,l._)("div",rs,[(0,l._)("div",ns,[(0,l._)("img",{src:s.user.avatar,alt:"",class:"rounded-circle avatar"},null,8,cs)]),(0,l._)("div",ms,[(0,l.Wm)(c,{to:`/profile/${s.user._id}`,class:"text-dark fw-bold fs-lg fs-md-sm"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(s.user.name),1)])),_:2},1032,["to"])])]),(0,l._)("div",ps,[(0,l._)("button",{class:"btn--primary text-nowrap",onClick:e=>d.unfollowUsers(s.user._id)}," 取消追蹤 ",8,us)])])])))),128))])])])]),(0,l._)("div",fs,[(0,l._)("div",gs,[(0,l._)("div",hs,[_s,(0,l._)("div",bs,[s.followersList.length<=0?((0,l.wg)(),(0,l.iD)("div",ws," 還沒有粉絲喔 ")):(0,l.kq)("",!0),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.followersList,(s=>((0,l.wg)(),(0,l.iD)("div",{class:"w-100 border-bottom mb-3",key:s.user._id},[(0,l._)("div",xs,[(0,l._)("div",vs,[(0,l._)("div",ys,[(0,l._)("img",{src:s.user.avatar,alt:"",class:"rounded-circle avatar"},null,8,ks)]),(0,l._)("div",Ps,[(0,l.Wm)(c,{to:`/profile/${s.user._id}`,class:"text-dark fw-bold fs-lg fs-md-sm"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(s.user.name),1)])),_:2},1032,["to"])])]),(0,l._)("div",Ls,[(0,l._)("button",{class:"btn--primary text-nowrap",onClick:e=>d.unfollowersUser(s.user._id)}," 取消關注 ",8,Ds)])])])))),128))])])])]),(0,l._)("div",$s,[(0,l._)("div",Cs,[(0,l._)("div",Us,[zs,(0,l._)("div",js,[s.following<=0?((0,l.wg)(),(0,l.iD)("div",Ws," 他目前還沒有追蹤任何人喔 ")):(0,l.kq)("",!0),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.following,(s=>((0,l.wg)(),(0,l.iD)("div",{class:"w-100 border-bottom mb-3",key:s.user._id},[(0,l._)("div",Fs,[(0,l._)("div",Ms,[(0,l._)("div",Zs,[(0,l._)("img",{src:s.user.avatar,alt:"",class:"rounded-circle avatar"},null,8,Es)]),(0,l._)("div",qs,[(0,l.Wm)(c,{to:`/profile/${s.user._id}`,class:"text-dark fw-bold fs-lg fs-md-sm"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(s.user.name),1)])),_:2},1032,["to"])])])])])))),128))])])])]),(0,l._)("div",As,[(0,l._)("div",Hs,[(0,l._)("div",Ts,[Bs,(0,l._)("div",Is,[s.followers<=0?((0,l.wg)(),(0,l.iD)("div",Ys," 他目前還還沒有粉絲喔 ")):(0,l.kq)("",!0),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.followers,(s=>((0,l.wg)(),(0,l.iD)("div",{class:"w-100 border-bottom mb-3",key:s.user._id},[(0,l._)("div",Ks,[(0,l._)("div",Os,[(0,l._)("div",Gs,[(0,l._)("img",{src:s.user.avatar,alt:"",class:"rounded-circle avatar"},null,8,Ns)]),(0,l._)("div",Ss,[(0,l.Wm)(c,{to:`/profile/${s.user._id}`,class:"text-dark fw-bold fs-lg fs-md-sm"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(s.user.name),1)])),_:2},1032,["to"])])])])])))),128))])])])])],64)}var Js=t(9236),Qs=t(6732),Rs={data(){return{personProfile:[],followers:[],following:[],profile:[],isFollow:!1,isLoading:!1}},props:["id"],mixins:[Qs.Z],methods:{getPersonProfile(){const s=this.id,e=document.cookie.split("jwt=").pop();this.$http({method:"GET",url:`https://metashare.onrender.com/api/users/otherProfile/${s}`,headers:{Authorization:`Bearer ${e}`}}).then((s=>{this.personProfile=s.data.data,this.followers=s.data.data.followers,this.following=s.data.data.following,this.isFollow=this.followers.findIndex((s=>s.user._id===this.profile._id))})).catch((s=>{console.log(s)}))},followUser(){this.isLoading=!0;const s=this.id,e=document.cookie.split("jwt=").pop();this.$http({method:"POST",url:`https://metashare.onrender.com/api/users/${s}/following`,headers:{Authorization:`Bearer ${e}`}}).then((s=>{"success"===s.data.status&&(this.isLoading=!1,alert("您已追蹤成功"),this.getPersonProfile())})).catch((s=>{console.log(s)}))},unfollowUser(){this.isLoading=!0;const s=this.id,e=document.cookie.split("jwt=").pop();this.$http({method:"DELETE",url:`https://metashare.onrender.com/api/users/${s}/following`,headers:{Authorization:`Bearer ${e}`}}).then((s=>{"success"===s.data.status&&(this.isLoading=!1,alert("您已取消追蹤成功"),this.getPersonProfile())})).catch((s=>{console.log(s)}))}},created(){this.getPersonProfile()}},Xs=t(6720),se=t(1617),ee={data(){return{isFollow:!1}},components:{Navbar:Js.Z},mixins:[Rs,Qs.Z,Xs.Z,se.Z],methods:{unfollowersUser(s){this.isLoading=!0;const e=document.cookie.split("jwt=").pop();this.$http({method:"DELETE",url:`https://metashare.onrender.com/api/users/${s}/followers`,headers:{Authorization:`Bearer ${e}`}}).then((s=>{"success"===s.data.status&&(this.isLoading=!1,alert("您已取消關注成功"),this.getFollowers())})).catch((s=>{console.log(s)}))},unfollowUsers(s){this.isLoading=!0;const e=document.cookie.split("jwt=").pop();this.$http({method:"DELETE",url:`https://metashare.onrender.com/api/users/${s}/following`,headers:{Authorization:`Bearer ${e}`}}).then((s=>{"success"===s.data.status&&(this.isLoading=!1,alert("您已取消追蹤成功"),this.getFollow())})).catch((s=>{console.log(s)}))}}},te=t(89);const le=(0,te.Z)(ee,[["render",Vs]]);var oe=le,ae=t(6654),ie=t(9242);const de={key:0,class:"bg-white d-flex justify-content-center align-items-center py-6 shadow-lg rounded-2"},re={class:""},ne=(0,l._)("span",{class:"fs-2xs me-3",style:{color:"#a5a5a5"}},"沒有相關貼文，快去新增一則貼文吧！",-1),ce={class:""},me=(0,l._)("span",{class:"fs-2xs me-3",style:{color:"#a5a5a5"}},"沒有相關貼文喔",-1),pe=[me],ue={class:"w-100 py-3 px-6 rounded-2 shadow-lg bg-white mb-6"},fe={class:"border-bottom pb-3 mb-2"},ge={class:"d-flex align-items-center justify-content-between"},he={class:"d-flex align-items-center"},_e={class:"me-3"},be={class:"rounded-circle",style:{width:"56px",height:"56px"}},we=["src"],xe={class:""},ve={class:"dropdown"},ye=(0,l._)("a",{class:"post-edit rounded-2",href:"#",role:"button",id:"item.id","data-bs-toggle":"dropdown","aria-expanded":"false"},[(0,l._)("span",{class:"material-icons"}," more_horiz ")],-1),ke={class:"dropdown-menu","aria-labelledby":"item.id"},Pe=["onClick"],Le=["onClick"],De={class:"border-bottom pb-3 mb-2"},$e={key:0,class:"rounded-3 mt-3",style:{"max-height":"740px"}},Ce=["src"],Ue={class:"border-bottom pb-2 mb-3 d-flex align-items-center justify-content-center"},ze=["onClick"],je={key:0,class:"d-flex align-items-center"},We=(0,l._)("span",{class:"material-icons fs-4xl me-2",style:{color:"#de5d4b"}}," favorite ",-1),Fe=(0,l._)("span",{class:""},"喜歡",-1),Me=[We,Fe],Ze={key:1,class:"d-flex align-items-center",style:{color:"#b9b9b9"}},Ee=(0,l._)("span",{class:"material-icons fs-4xl me-2"}," favorite_border",-1),qe=(0,l._)("span",{class:""},"喜歡",-1),Ae=[Ee,qe],He={class:"border-bottom pb-2 mb-3 d-flex"},Te={class:"me-3"},Be={class:""},Ie=["data-bs-target"],Ye={key:0,class:"fs-xs",style:{color:"#b9b9b9"}},Ke=(0,l._)("span",{class:"material-icons fs-lg me-2"}," favorite_border ",-1),Oe=(0,l._)("span",{class:"text-nowrap"},"成為第一個喜歡的朋友",-1),Ge=[Ke,Oe],Ne={key:1,class:"fs-xs"},Se=(0,l._)("span",{class:"material-icons fs-lg me-2",style:{color:"#de5d4b"}}," favorite ",-1),Ve={class:"d-flex align-items-center"},Je={type:"button",class:"border-0 bg-white d-flex"},Qe={key:0,class:"fs-xs text-nowrap",style:{color:"#b9b9b9"}},Re=(0,l._)("span",{class:"material-icons fs-lg me-2"}," chat_bubble_outline ",-1),Xe=(0,l._)("span",{class:"text-nowrap"},"尚無留言",-1),st=[Re,Xe],et={key:1,class:"fs-xs text-nowrap"},tt=(0,l._)("span",{class:"material-icons fs-lg me-2 text-primary"}," comment ",-1),lt={class:"d-flex"},ot={class:"rounded-circle me-3",style:{width:"36px",height:"36px"}},at=["src"],it={class:"py-2 px-3 rounded-3",style:{"background-color":"#f4f4f4"}},dt={class:"d-flex"},rt={class:"text-black-50 fs-xs"},nt={class:"d-flex align-items-center w-100"},ct={class:"me-3"},mt={class:"rounded-circle",style:{height:"40px",width:"40px"}},pt=["src"],ut={class:"comments-box d-flex justify-content-between rounded-pill border border-light w-100"},ft=["onKeydown"],gt=["onClick"],ht=(0,l.Uk)(" 留言 "),_t={key:0,class:"spinner-border spinner-border-sm mt-1 ms-2",role:"status"},bt=(0,l._)("span",{class:"visually-hidden"},"Loading...",-1),wt=[bt],xt=["id"],vt={class:"modal-dialog modal-dialog-centered modal-dialog-scrollable"},yt={class:"modal-content"},kt=(0,l._)("div",{class:"modal-header"},[(0,l._)("h1",{class:"modal-title fw-bold fs-lg text-primary text-center"}," 說讚的用戶 "),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Pt={class:"modal-body"},Lt={class:"py-2"},Dt={class:"d-flex align-items-center"},$t={class:"rounded-circle me-3",style:{width:"36px",height:"36px"}},Ct=["src"];function Ut(s,e,t,a,i,d){const r=(0,l.up)("Loading"),n=(0,l.up)("router-link"),c=(0,l.up)("createPostModal");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(r,{active:i.isLoading},null,8,["active"]),s.personPosts.length<=0?((0,l.wg)(),(0,l.iD)("div",de,[(0,l.wy)((0,l._)("div",re,[ne,(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=(...e)=>s.openPostModal&&s.openPostModal(...e))}," 新增貼文 ")],512),[[ie.F8,s.personProfile._id===i.profile._id]]),(0,l.wy)((0,l._)("div",ce,pe,512),[[ie.F8,s.personProfile._id!==i.profile._id]])])):((0,l.wg)(!0),(0,l.iD)(l.HY,{key:1},(0,l.Ko)(s.personPosts,(t=>((0,l.wg)(),(0,l.iD)("div",{class:"w-100 mb-6",key:t._id},[(0,l._)("div",ue,[(0,l._)("div",fe,[(0,l._)("div",ge,[(0,l._)("div",he,[(0,l._)("div",_e,[(0,l._)("div",be,[(0,l._)("img",{src:t.user.avatar,style:{width:"56px",height:"56px"},alt:"",class:"rounded-circle"},null,8,we)])]),(0,l._)("div",xe,[(0,l.Wm)(n,{to:`/profile/${t.user._id}`},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(t.user.name),1)])),_:2},1032,["to"]),(0,l._)("p",null,(0,o.zw)(i.day(t.createdAt)),1)])]),(0,l.wy)((0,l._)("div",ve,[ye,(0,l._)("ul",ke,[(0,l._)("li",null,[(0,l._)("button",{type:"button",class:"dropdown-item",onClick:e=>s.openPostModal(!1,t)}," 編輯 ",8,Pe)]),(0,l._)("li",null,[(0,l._)("button",{type:"button",class:"dropdown-item",onClick:e=>s.delPost(t.id)}," 刪除 ",8,Le)])])],512),[[ie.F8,i.profile._id===t.user._id]])])]),(0,l._)("div",De,[(0,l._)("p",null,(0,o.zw)(t.content),1),t.image?((0,l.wg)(),(0,l.iD)("div",$e,[(0,l._)("img",{src:t.image,class:"w-100 h-100 rounded-3",alt:"",style:{"max-height":"740px"}},null,8,Ce)])):(0,l.kq)("",!0)]),(0,l._)("div",Ue,[(0,l._)("button",{type:"button",class:"border-0 bg-white w-100 d-flex justify-content-center align-items-center",onClick:s=>d.likesPost(t)},[t.likes.find((s=>s._id===this.profile._id))?((0,l.wg)(),(0,l.iD)("div",je,Me)):((0,l.wg)(),(0,l.iD)("div",Ze,Ae))],8,ze)]),(0,l._)("div",He,[(0,l._)("div",Te,[(0,l._)("div",Be,[(0,l._)("button",{type:"button","data-bs-toggle":"modal","data-bs-target":"#likesModal"+t.id,class:"border-0 bg-white d-flex"},[0===t.likes.length?((0,l.wg)(),(0,l.iD)("div",Ye,Ge)):((0,l.wg)(),(0,l.iD)("div",Ne,[Se,(0,l._)("span",null,(0,o.zw)(t.likes.length)+"個人喜歡",1)]))],8,Ie)])]),(0,l._)("div",Ve,[(0,l._)("button",Je,[0===t.comments.length?((0,l.wg)(),(0,l.iD)("div",Qe,st)):((0,l.wg)(),(0,l.iD)("div",et,[tt,(0,l._)("span",null,(0,o.zw)(t.comments.length)+"個人留言",1)]))])])]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.comments,(s=>((0,l.wg)(),(0,l.iD)("div",{class:"border-bottom pb-3 mb-3",key:s._id},[(0,l._)("div",lt,[(0,l._)("div",ot,[(0,l._)("img",{src:s.userId.avatar,alt:"",style:{width:"36px",height:"36px"},class:"rounded-circle"},null,8,at)]),(0,l._)("div",it,[(0,l._)("div",dt,[(0,l.Wm)(n,{to:`/profile/${s.userId._id}`,class:"me-3"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(s.userId.name),1)])),_:2},1032,["to"]),(0,l._)("p",rt,(0,o.zw)(i.day(s.createdAt)),1)]),(0,l._)("p",null,(0,o.zw)(s.comment),1)])])])))),128)),(0,l._)("div",nt,[(0,l._)("div",ct,[(0,l._)("div",mt,[(0,l._)("img",{src:i.profile.avatar,style:{height:"40px",width:"40px"},alt:"",class:"rounded-circle"},null,8,pt)])]),(0,l._)("div",ut,[(0,l._)("input",{type:"text",placeholder:"留言.....",class:"search-input border border-0 w-100",onInput:e[1]||(e[1]=s=>i.comments.comment=s.target.value),onKeydown:(0,ie.D2)((s=>d.createComment(t.id)),["enter"]),ref_for:!0,ref:"commentValue"},null,40,ft),(0,l._)("button",{onClick:s=>d.createComment(t.id),type:"button",class:"text-nowrap rounded-pill border-0 btn btn-primary fs-md fs-md-sm py-lg-1 px-lg-10 px-2 py-0 fw-bold"},[ht,this.status.loadingItem===t.id?((0,l.wg)(),(0,l.iD)("div",_t,wt)):(0,l.kq)("",!0)],8,gt)])])]),(0,l._)("div",{class:"modal fade",id:"likesModal"+t.id,tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[(0,l._)("div",vt,[(0,l._)("div",yt,[kt,(0,l._)("div",Pt,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.likes,(s=>((0,l.wg)(),(0,l.iD)("div",Lt,[(0,l._)("div",Dt,[(0,l._)("div",$t,[(0,l._)("img",{src:s.avatar,style:{width:"36px",height:"36px"},alt:"",class:"rounded-circle"},null,8,Ct)]),((0,l.wg)(),(0,l.iD)("p",{class:"",key:s.id},(0,o.zw)(s.name),1))])])))),256))])])])],8,xt)])))),128)),(0,l.Wm)(c,{ref:"createPostModal",post:s.tempPost,onCreatePost:s.createPost},null,8,["post","onCreatePost"])],64)}var zt=t(9743),jt={data(){return{personPosts:[],isLoading:!1}},props:["id"],methods:{getPersonPosts(){this.isLoading=!0;const s=this.id,e=document.cookie.split("jwt=").pop();this.$http({method:"GET",url:`https://metashare.onrender.com/api/posts/user/${s}`,headers:{Authorization:`Bearer ${e}`}}).then((s=>{this.isLoading=!1,this.personPosts=s.data.data})).catch((s=>{this.isLoading=!1,console.log(s)}))}},created(){this.getPersonPosts()}},Wt=t(9544),Ft=t(9445),Mt=t(7615),Zt={data(){return{comments:{},profile:[],dayToNow:zt.u,day:zt.v,isLoading:!1,status:{loadingItem:""}}},components:{createPostModal:ae.Z},mixins:[Qs.Z,jt,Wt.Z,Rs,Ft.Z,Mt.Z],methods:{createComment(s){const e=document.cookie.split("jwt=").pop();this.status.loadingItem=s,this.$http({method:"POST",url:`https://metashare.onrender.com/api/post/${s}/comments`,headers:{Authorization:`Bearer ${e}`},data:this.comments}).then((s=>{console.log(s),this.$refs.commentValue.forEach((e=>{"success"===s.data.status&&e.value})),this.status.loadingItem="",this.getPersonPosts()})).catch((s=>{this.isLoading=!1,console.log(s),"Error"===s.response.data.status&&(alert("請輸入留言內容"),this.status.loadingItem=!1)}))},likesPost(s){const e=s.likes.find((s=>s._id===this.profile._id));if(e)return void this.delLikesPost(s);const t=document.cookie.split("jwt=").pop();this.$http({method:"POST",url:`https://metashare.onrender.com/api/post/${s._id}/likes`,headers:{Authorization:`Bearer ${t}`}}).then((s=>{this.getPersonPosts()})).catch((s=>{console.log(s)}))},delLikesPost(s){const e=document.cookie.split("jwt=").pop();this.$http({method:"DELETE",url:`https://metashare.onrender.com/api/post/${s._id}/likes`,headers:{Authorization:`Bearer ${e}`}}).then((s=>{console.log(s),this.getPersonPosts()})).catch((s=>{console.log(s)}))}},created(){this.getPersonPosts()}};const Et=(0,te.Z)(Zt,[["render",Ut]]);var qt=Et,At={mixins:[Qs.Z,Rs,Wt.Z,Ft.Z],components:{ProfileHeader:oe,createPostModal:ae.Z,PersonPosts:qt}};const Ht=(0,te.Z)(At,[["render",_]]);var Tt=Ht}}]);
//# sourceMappingURL=513.84d86ee3.js.map