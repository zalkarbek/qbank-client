import mime from 'mime'

export default ({ app }, inject) => {
  inject('mime', mime)
}
