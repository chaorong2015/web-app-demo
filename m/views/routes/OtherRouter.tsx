import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StartPage from '../other/StartPage';
import AboutPage from '../account/AboutPage';
import AccountManagePage from '../account/AccountManagePage';
import TelChangePage from '../account/TelChangePage';
import PasswordChangePage from '../account/PasswordChangePage';
import AliPayBindPage from '../account/AliPayBindPage';
import CouponListPage from '../account/CouponListPage';
import FavoriteListPage from '../account/FavoriteListPage';
import IncomeListPage from '../account/IncomeListPage';
import SettingPage from '../account/SettingPage';
import AccountEditorPage from '../account/AccountEditorPage';
import AddressListPage from '../address/AddressListPage';
import AddressCreatePage from '../address/AddressCreatePage';
import AddressEditorPage from '../address/AddressEditorPage';
import CommentListPage from '../comment/CommentListPage';
import CommentCreatePage from '../comment/CommentCreatePage';
import ContactListPage from '../contact/ContactListPage';
import ContactCreatePage from '../contact/ContactCreatePage';
import ContactEditorPage from '../contact/ContactEditorPage';
import FeedbackListPage from '../feedback/FeedbackListPage';
import FeedbackCreatePage from '../feedback/FeedbackCreatePage';
import GoodsAgentListPage from '../goods/GoodsAgentListPage';
import GoodsListPage from '../goods/GoodsListPage';
import GoodsDetailPage from '../goods/GoodsDetailPage';
import GoodsCheckoutPage from '../goods/GoodsCheckoutPage';
import GoodsOrderListPage from '../goods/GoodsOrderListPage';
import GoodsOrderDetailPage from '../goods/GoodsOrderDetailPage';
import GuideListPage from '../guide/GuideListPage';
import GuideDetailPage from '../guide/GuideDetailPage';
import LoginPage from '../login/LoginPage';
import RegisterPage from '../login/RegisterPage';
import RetrievePage from '../login/RetrievePage';
import WChatLoginPage from '../login/WChatLoginPage';
import NoticeDetailPage from '../notice/NoticeDetailPage';
import PaymentCompletePage from '../other/PaymentCompletePage';
import ProtocolPage from '../other/ProtocolPage';
import SearchPage from '../other/SearchPage';
import TravelDetailPage from '../travel/TravelDetailPage';
import VisitorsListPage from '../travel/VisitorsListPage';
import TravelDateSelectPage from '../travel/TravelDateSelectPage';
import TravelCheckoutPage from '../travel/TravelCheckoutPage';
import TravelOrderListPage from '../travel/TravelOrderListPage';
import TravelOrderDetailPage from '../travel/TravelOrderDetailPage';
import VisaListPage from '../visa/VisaListPage';
import VisaDetailPage from '../visa/VisaDetailPage';
import VisaOrderListPage from '../visa/VisaOrderListPage';
import VisaCheckoutPage from '../visa/VisaCheckoutPage';
import MessageListPage from '../message/MessageListPage';
import MessageDetailPage from '../message/MessageDetailPage';
import InsuranceDetailPage from '../other/InsuranceDetailPage';
import { setRouteHistory } from '../../utils/cordova';

interface Props {
}

interface State {
}

export default class OtherRouter extends React.Component<Props, State> {
  componentDidMount() {
    //@ts-ignore
    setRouteHistory(this.props.history);
  }
  render() {
    return (
      <div className="full">
        <Switch>
          {/* 引导页面 启动后先进入此页面 */}
          <Route component={StartPage} exact path="/" />
          {/* 个人中心的相关页面 */}
          <Route component={SettingPage} exact path="/setting" />
          <Route component={AboutPage} exact path="/setting/about" />
          <Route component={FavoriteListPage} exact path="/account/favorite" />
          <Route component={IncomeListPage} exact path="/account/income" />
          <Route component={CouponListPage} exact path="/account/coupon" />
          <Route component={AccountManagePage} exact path="/account/manage" />
          <Route component={AccountEditorPage} exact path="/account/edit" />
          <Route component={TelChangePage} exact path="/account/manage/tel-change" />
          <Route component={PasswordChangePage} exact path="/account/manage/password-change" />
          <Route component={AliPayBindPage} exact path="/account/manage/ali-bind" />
          {/* 个人中心-地址相关 */}
          <Route component={AddressListPage} exact path="/account/address" />
          <Route component={AddressCreatePage} exact path="/account/address/create" />
          <Route component={AddressEditorPage} exact path="/account/address/:id" />
          {/* 评论相关 旅游线路和攻略的评论列表都是进入此处 */}
          <Route component={CommentListPage} exact path="/comment" />
          <Route component={CommentCreatePage} exact path="/comment/create" />
          {/* 常用联系人相关 预定旅游线路时创建出游人是进入此处 */}
          <Route component={ContactListPage} exact path="/account/contact" />
          <Route component={ContactCreatePage} exact path="/account/contact/create" />
          <Route component={ContactEditorPage} exact path="/account/contact/:id" />
          {/* 反馈相关 */}
          <Route component={FeedbackListPage} exact path="/account/feedback" />
          <Route component={FeedbackCreatePage} exact path="/account/feedback/create" />
          {/* 代购商品相关 */}
          <Route component={GoodsAgentListPage} exact path="/goods/agent" />
          <Route component={GoodsListPage} exact path="/goods" />
          <Route component={GoodsCheckoutPage} exact path="/goods/checkout/:id" />
          <Route component={GoodsOrderListPage} exact path="/account/goods/order" />
          <Route component={GoodsOrderDetailPage} exact path="/account/goods/order/:id" />
          <Route component={GoodsDetailPage} exact path="/goods/:id" />
          {/* 攻略相关 */}
          <Route component={GuideListPage} exact path="/guide" />
          <Route component={GuideDetailPage} exact path="/guide/:id" />
          {/* 登录相关 */}
          <Route component={LoginPage} exact path="/login" />
          <Route component={RegisterPage} exact path="/register" />
          <Route component={RetrievePage} exact path="/retrieve" />
          <Route component={WChatLoginPage} exact path="/wchat-login" />
          {/* 公告相关 */}
          {/* <Route component={NoticeListPage} exact path="/notice" /> */}
          <Route component={NoticeDetailPage} exact path="/notice/:id" />
          {/* 旅游线路相关 */}
          <Route component={VisitorsListPage} exact path="/travel/visitors" />
          <Route component={TravelDateSelectPage} exact path="/travel/date" />
          <Route component={TravelCheckoutPage} exact path="/travel/checkout/:id" />
          <Route component={TravelOrderListPage} exact path="/account/travel/order" />
          <Route component={TravelOrderDetailPage} exact path="/account/travel/order/:id" />
          <Route component={TravelDetailPage} exact path="/travel/:id" />
          <Route component={InsuranceDetailPage} exact path="/insurance/:id" />
          {/* 签证相关 */}
          <Route component={VisaListPage} exact path="/visa" />
          <Route component={VisaCheckoutPage} exact path="/visa/checkout/:id" />
          <Route component={VisaOrderListPage} exact path="/account/visa/order" />
          <Route component={VisaDetailPage} exact path="/visa/:id" />
          {/* 推送消息相关 */}
          <Route component={MessageListPage} exact path="/message" />
          <Route component={MessageDetailPage} exact path="/message/:id" />
          {/* 其他 */}
          <Route component={PaymentCompletePage} exact path="/payment-complete" />
          <Route component={ProtocolPage} exact path="/protocol/:id" />
          <Route component={SearchPage} exact path="/search" />
        </Switch>
      </div>
    );
  }
}
