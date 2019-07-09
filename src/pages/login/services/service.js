import request from 'umi-request';
import { APIV1 } from '../../../utils/config'
import { FromDataType } from '../index';

export async function fakeAccountLogin(params: FromDataType) {
  return request(`${APIV1}/api/oauth/auth`, {
    method: 'POST',
    data: params,
  });
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
