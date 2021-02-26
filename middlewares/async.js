const Res = require("ssv-response");
const mongoose = require("mongoose");
const { TrackSession } = require("../utils/session");

const Catcher = function (handler, option = { useTransaction: false, error_code: 500, full_error: false }) {
  if (option.useTransaction) {
    return async (req, res, next) => {
      const session = await mongoose.startSession();
      session.startTransaction();
      const resp = new Res(res);
      try {
        const opts = { session };
        await handler(req, res, next, opts);
        await session.commitTransaction();
        session.endSession();
      } catch (ex) {
        if (option.full_error) {
          console.log(ex);
        }
        await session.abortTransaction();
        session.endSession();
        return resp.somethingWrong({ error: ex, code: option.error_code });
      }
    };
  } else {
    return async (req, res, next) => {
      const resp = new Res(res);
      try {
        await handler(req, res, next);
      } catch (ex) {
        if (option.full_error) {
          console.log(ex);
        }

        return resp.somethingWrong({ error: ex, code: option.error_code });
      }
    };
  }
};

module.exports = Catcher;
