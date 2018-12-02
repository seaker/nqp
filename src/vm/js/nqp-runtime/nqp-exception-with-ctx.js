const NQPException = require('./nqp-exception.js');
class NQPExceptionWithCtx extends NQPException {
  constructor(message, ctx, stack) {
    super(message);
    this.$$ctx = ctx;
    this.$$stack = stack;
  }
};
module.exports = NQPExceptionWithCtx;
