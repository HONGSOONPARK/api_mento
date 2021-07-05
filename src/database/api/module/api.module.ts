import { Module } from '@nestjs/common';
import { ApiService } from '../service/api.service';
import { ApiController } from '../controller/api.controller';
import { AppInfo } from '../entities/appinfo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppInfoService } from '../service/appinfo.service';
import { Connection } from 'typeorm';
import { PushInfoService } from '../service/pushinfo.service';
import { PushInfo } from '../entities/pushinfo.entity';
import { AlgorithmService } from '../service/algorithm.service';
import { Algorithm } from '../entities/algorithm.entity';
import { Notice } from '../entities/notice.entity';

import { AgPortfolio } from '../entities/ag_portfolio.entity';
import { AgPortfolioService } from '../service/ag_portfolio.service';

import { Banner } from '../entities/banner.entity';
import { BannerService } from '../service/banner.service';
import { NoticeService } from '../service/notice.service';
import { OauthController } from '../controller/oauth.controller';
import { OauthService } from '../service/oauth.service';
import * as firebase_sdkJson from '../../../../firebase_sdk.json';

// Firebase setup
import firebaseAdmin from 'firebase-admin';

@Module({
  imports: [TypeOrmModule.forFeature([AppInfo, PushInfo, Algorithm, Banner, Notice, AgPortfolio])],
  controllers: [ApiController, OauthController],
  providers: [ApiService,AppInfoService, PushInfoService, AlgorithmService, BannerService, NoticeService, AgPortfolioService, OauthService ]
})


export class ApiModule {
  constructor(private connection: Connection) {

    const params = {
      type: firebase_sdkJson.type,
      projectId: firebase_sdkJson.project_id,
      privateKeyId: firebase_sdkJson.private_key_id,
      privateKey: firebase_sdkJson.private_key,
      clientEmail: firebase_sdkJson.client_email,
      clientId: firebase_sdkJson.client_id,
      authUri: firebase_sdkJson.auth_uri,
      tokenUri: firebase_sdkJson.token_uri,
      authProviderX509CertUrl: firebase_sdkJson.auth_provider_x509_cert_url,
      clientC509CertUrl: firebase_sdkJson.client_x509_cert_url
    }

    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert(params),
    });
  }


}
