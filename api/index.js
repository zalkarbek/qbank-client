import { UserApi } from '@/api/UserApi'
import { AuthApi } from '@/api/AuthApi'
import { PostCategoryApi } from '@/api/PostCategoryApi'
import { PostApi } from '@/api/PostApi'
import { TagApi } from '@/api/TagApi'
import { RoleApi } from '@/api/RoleApi'
import { FileApi } from '@/api/FileApi'
import { OptionApi } from '@/api/OptionApi'
import { LangApi } from '@/api/LangApi'
import { MenuApi } from '@/api/MenuApi'
import { SliderApi } from '@/api/SliderApi'
import { TurnApi } from '@/api/TurnApi'
import { DateApi } from '@/api/DateApi'
import { AdsApi } from '@/api/AdsApi'
import { TvTabloApi } from '@/api/TvTabloApi'
import { TerminalApi } from '~/api/TerminalApi'

class ApiFactory {
  constructor (context) {
    this.crud = context.store.state.crud
    this.context = context
    this.apiServices = {
      terminalApi: new TerminalApi(context, {
        apiUrl: 'terminal'
      }),
      tvTabloApi: new TvTabloApi(context, {
        apiUrl: 'tvtablos'
      }),
      turnApi: new TurnApi(context, {
        apiUrl: 'turns'
      }),
      adsApi: new AdsApi(context, {
        apiUrl: 'ads'
      }),
      authApi: new AuthApi(context, {
        apiUrl: 'auth'
      }),
      userApi: new UserApi(context, {
        apiUrl: 'users',
        crud: 'user'
      }),
      postCategoryApi: new PostCategoryApi(context, {
        apiUrl: 'posts/categories',
        crud: 'postCategory'
      }),
      postApi: new PostApi(context, {
        apiUrl: 'posts',
        crud: 'post'
      }),
      tagApi: new TagApi(context, {
        apiUrl: 'tags',
        crud: 'tag'
      }),
      roleApi: new RoleApi(context, {
        apiUrl: 'roles',
        crud: 'role'
      }),
      fileApi: new FileApi(context, {
        apiUrl: 'files',
        crud: 'file'
      }),
      menuApi: new MenuApi(context, {
        apiUrl: 'menu',
        crud: 'menu'
      }),
      optionApi: new OptionApi(context, {
        apiUrl: 'options',
        crud: 'option'
      }),
      langApi: new LangApi(context, {
        apiUrl: 'lang',
        crud: 'lang'
      }),
      sliderApi: new SliderApi(context, {
        apiUrl: 'sliders',
        crud: 'slider'
      }),
      dateApi: new DateApi(context, {
        apiUrl: 'date',
        crud: 'date'
      })
    }
  }

  getApi (name) {
    return this.apiServices[name]
  }

  req (req, { params, data }) {
    return this.context.$axios({
      method: req.method,
      url: req.url,
      params,
      data
    })
  }

  get (url, config) {
    return this.context.$axios.$get(url, config)
  }

  post (url, config) {
    return this.context.$axios.$post(url, config)
  }

  put (url, config) {
    return this.context.$axios.$put(url, config)
  }

  delete (url, config) {
    return this.context.$axios.$delete(url, config)
  }

  setHeader (name, value, scopes = []) {
    this.context.$axios.setHeader(name, value, scopes)
  }

  setToken (
    token,
    type = 'Bearer',
    scopes = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
  ) {
    console.log('SET_TOKEN')
    this._tokenConfig = { token, type, scopes }
    this._token = token
    this.context.$axios.setToken(token, type, scopes)
  }
}

export default (context) => {
  return new ApiFactory(context)
}
