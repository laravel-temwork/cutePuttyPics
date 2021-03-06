import { TransactionDetailPage } from '../pages/transaction-detail/transaction-detail';
import { AllTransactionsPage } from '../pages/all-transactions/all-transactions';
import { PendingTransactionsPage } from '../pages/pending-transactions/pending-transactions';
import { CashOutPage } from '../pages/cash-out/cash-out';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { UsermanagerPage } from '../pages/usermanager/usermanager';
import { VerifyQRcodePage} from '../pages/verify-q-rcode/verify-q-rcode'
import { SettingsPage } from '../pages/settings/settings';
import { VerifypaypalPage} from '../pages/verifypaypal/verifypaypal';
import { ReportPage } from '../pages/report/report';
import { ReceivemoneyPage } from '../pages/receivemoney/receivemoney';
import { SendmoneyPage } from '../pages/sendmoney/sendmoney';
import { SenderPage } from '../pages/sender//sender';
import { SuperadminPage } from '../pages/superadmin/superadmin';
import { AdminmanagerPage } from '../pages/adminmanager/adminmanager';
import { RegisteredadminPage } from '../pages/registeredadmin/registeredadmin';
import { RequestadminPage } from '../pages/requestadmin/requestadmin';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { MaxLengthDirective } from '../directives/c-maxlength/c-maxlength';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { FIREBASE_CONFIG } from "./app.firebase.config";
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

import { PayPal } from '@ionic-native/paypal';
import { CurrencyPipe } from '@angular/common';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    SuperadminPage,
    AdminmanagerPage,
    RegisteredadminPage,
    RequestadminPage,
    SenderPage,
    SendmoneyPage,
    ReceivemoneyPage,
    VerifypaypalPage,
    SettingsPage,
    ReportPage,
    CashOutPage,
    AllTransactionsPage,
    PendingTransactionsPage,
    TransactionDetailPage,
    VerifyQRcodePage,
    UsermanagerPage,
    ForgotPasswordPage,
    ResetPasswordPage,
    MaxLengthDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    SuperadminPage,
    AdminmanagerPage,
    RegisteredadminPage,
    RequestadminPage,
    SenderPage,
    SendmoneyPage,
    ReceivemoneyPage,
    VerifypaypalPage,
    ReportPage,
    VerifyQRcodePage,
    UsermanagerPage,
    SettingsPage,
    ForgotPasswordPage,
    ResetPasswordPage,
    CashOutPage,
    TransactionDetailPage,
    AllTransactionsPage,
    PendingTransactionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabaseModule,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    AngularFireAuth,
    BarcodeScanner,
    File,
    Transfer,
    Camera,
    FilePath,
    PayPal,
    CurrencyPipe
  ]
})
export class AppModule {}
