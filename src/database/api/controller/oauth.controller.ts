import { Controller, Get, Param, Post, Body, Patch, Put, Logger } from '@nestjs/common';
import { request } from 'http';
import { OauthService } from '../service/oauth.service';
import { Response, ResponseMessage } from '../utils/response.utils';

// import * as kakao_auth from '../utils/kakao_auth';

@Controller('oauth')
export class OauthController {
  // 플랫폼	앱 키	재발급
// 네이티브 앱 키	27ccd9bac2fb0003b87894181c138f26 복사	재발급
// REST API 키	0cdc5405e9a41dc9b32c5590b888dacc 복사	재발급
// JavaScript 키	3fc56c8fd83c803b2db20ef493cfe970 복사	재발급
// Admin 키	8157e4863b3ca23f0de98f53bff971f8
// http://localhost:3000/api/kakao/login

    
    constructor(
        private readonly oauthService: OauthService, 
        ){}


    // 카카오톡 로그인 콜백
    @Get('/kakao/sign_in')
    async kakaoSign(request, response){
      console.log('kakao sign');
      try{
        // const redirect = `webauthcallback://success?${new URLSearchParams(request.query).toString()}`;
        // console.log(`Redirecting to ${redirect}`);
        // const redirect = `${request}`;
        // response.redirect(307, redirect);

        const redirect = `webauthcallback://success?${new URLSearchParams(request.query).toString()}`;
        console.log(`Redirecting to ${redirect}`);
        response.redirect(307, redirect);

      } catch (err){
        Logger.error(err);
      }
    }


      // 카카오톡 로그인 콜백
    // @Post('/kakao/token')
    // async kakaoToken(request, response){
    //   console.log('kakao token');
    //   try{
    //     kakao_auth.createFirebaseToken(request.body["accessToken"],(resulst)=>{
    //       response.send(resulst);
    //     });
    //   } catch (err){
    //     Logger.error(err);
    //   }
    // }

}
