import confirm, { withConfirm } from "antd/es/modal/confirm";

export default (options) => {
  return confirm(withConfirm(options));
};
