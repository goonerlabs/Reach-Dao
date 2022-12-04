// Automatically generated with Reach 0.1.12 (1f68dfdb)
pragma abicoder v2;
pragma solidity ^0.8.16;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20 {
    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `from` to `to` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);

    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

/**
 * @dev Interface for the optional metadata functions from the ERC20 standard.
 *
 * _Available since v4.1._
 */
interface IERC20Metadata is IERC20 {
    /**
     * @dev Returns the name of the token.
     */
    function name() external view returns (string memory);

    /**
     * @dev Returns the symbol of the token.
     */
    function symbol() external view returns (string memory);

    /**
     * @dev Returns the decimals places of the token.
     */
    function decimals() external view returns (uint8);
}

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}

/**
 * @dev Implementation of the {IERC20} interface.
 *
 * This implementation is agnostic to the way tokens are created. This means
 * that a supply mechanism has to be added in a derived contract using {_mint}.
 * For a generic mechanism see {ERC20PresetMinterPauser}.
 *
 * TIP: For a detailed writeup see our guide
 * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How
 * to implement supply mechanisms].
 *
 * We have followed general OpenZeppelin Contracts guidelines: functions revert
 * instead returning `false` on failure. This behavior is nonetheless
 * conventional and does not conflict with the expectations of ERC20
 * applications.
 *
 * Additionally, an {Approval} event is emitted on calls to {transferFrom}.
 * This allows applications to reconstruct the allowance for all accounts just
 * by listening to said events. Other implementations of the EIP may not emit
 * these events, as it isn't required by the specification.
 *
 * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}
 * functions have been added to mitigate the well-known issues around setting
 * allowances. See {IERC20-approve}.
 */
contract ERC20 is Context, IERC20, IERC20Metadata {
    mapping(address => uint256) private _balances;

    mapping(address => mapping(address => uint256)) private _allowances;

    uint256 private _totalSupply;

    string private _name;
    string private _symbol;

    /**
     * @dev Sets the values for {name} and {symbol}.
     *
     * The default value of {decimals} is 18. To select a different value for
     * {decimals} you should overload it.
     *
     * All two of these values are immutable: they can only be set once during
     * construction.
     */
    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    /**
     * @dev Returns the name of the token.
     */
    function name() public view virtual override returns (string memory) {
        return _name;
    }

    /**
     * @dev Returns the symbol of the token, usually a shorter version of the
     * name.
     */
    function symbol() public view virtual override returns (string memory) {
        return _symbol;
    }

    /**
     * @dev Returns the number of decimals used to get its user representation.
     * For example, if `decimals` equals `2`, a balance of `505` tokens should
     * be displayed to a user as `5.05` (`505 / 10 ** 2`).
     *
     * Tokens usually opt for a value of 18, imitating the relationship between
     * Ether and Wei. This is the value {ERC20} uses, unless this function is
     * overridden;
     *
     * NOTE: This information is only used for _display_ purposes: it in
     * no way affects any of the arithmetic of the contract, including
     * {IERC20-balanceOf} and {IERC20-transfer}.
     */
    function decimals() public view virtual override returns (uint8) {
        return 18;
    }

    /**
     * @dev See {IERC20-totalSupply}.
     */
    function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }

    /**
     * @dev See {IERC20-balanceOf}.
     */
    function balanceOf(address account) public view virtual override returns (uint256) {
        return _balances[account];
    }

    /**
     * @dev See {IERC20-transfer}.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - the caller must have a balance of at least `amount`.
     */
    function transfer(address to, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _transfer(owner, to, amount);
        return true;
    }

    /**
     * @dev See {IERC20-allowance}.
     */
    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return _allowances[owner][spender];
    }

    /**
     * @dev See {IERC20-approve}.
     *
     * NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on
     * `transferFrom`. This is semantically equivalent to an infinite approval.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function approve(address spender, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, amount);
        return true;
    }

    /**
     * @dev See {IERC20-transferFrom}.
     *
     * Emits an {Approval} event indicating the updated allowance. This is not
     * required by the EIP. See the note at the beginning of {ERC20}.
     *
     * NOTE: Does not update the allowance if the current allowance
     * is the maximum `uint256`.
     *
     * Requirements:
     *
     * - `from` and `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     * - the caller must have allowance for ``from``'s tokens of at least
     * `amount`.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public virtual override returns (bool) {
        address spender = _msgSender();
        _spendAllowance(from, spender, amount);
        _transfer(from, to, amount);
        return true;
    }

    /**
     * @dev Atomically increases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, _allowances[owner][spender] + addedValue);
        return true;
    }

    /**
     * @dev Atomically decreases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     * - `spender` must have allowance for the caller of at least
     * `subtractedValue`.
     */
    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {
        address owner = _msgSender();
        uint256 currentAllowance = _allowances[owner][spender];
        require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");
        unchecked {
            _approve(owner, spender, currentAllowance - subtractedValue);
        }

        return true;
    }

    /**
     * @dev Moves `amount` of tokens from `sender` to `recipient`.
     *
     * This internal function is equivalent to {transfer}, and can be used to
     * e.g. implement automatic token fees, slashing mechanisms, etc.
     *
     * Emits a {Transfer} event.
     *
     * Requirements:
     *
     * - `from` cannot be the zero address.
     * - `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     */
    function _transfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {
        require(from != address(0), "ERC20: transfer from the zero address");
        require(to != address(0), "ERC20: transfer to the zero address");

        _beforeTokenTransfer(from, to, amount);

        uint256 fromBalance = _balances[from];
        require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");
        unchecked {
            _balances[from] = fromBalance - amount;
        }
        _balances[to] += amount;

        emit Transfer(from, to, amount);

        _afterTokenTransfer(from, to, amount);
    }

    /** @dev Creates `amount` tokens and assigns them to `account`, increasing
     * the total supply.
     *
     * Emits a {Transfer} event with `from` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     */
    function _mint(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: mint to the zero address");

        _beforeTokenTransfer(address(0), account, amount);

        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);

        _afterTokenTransfer(address(0), account, amount);
    }

    /**
     * @dev Destroys `amount` tokens from `account`, reducing the
     * total supply.
     *
     * Emits a {Transfer} event with `to` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     * - `account` must have at least `amount` tokens.
     */
    function _burn(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: burn from the zero address");

        _beforeTokenTransfer(account, address(0), amount);

        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
        unchecked {
            _balances[account] = accountBalance - amount;
        }
        _totalSupply -= amount;

        emit Transfer(account, address(0), amount);

        _afterTokenTransfer(account, address(0), amount);
    }

    /**
     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.
     *
     * This internal function is equivalent to `approve`, and can be used to
     * e.g. set automatic allowances for certain subsystems, etc.
     *
     * Emits an {Approval} event.
     *
     * Requirements:
     *
     * - `owner` cannot be the zero address.
     * - `spender` cannot be the zero address.
     */
    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    /**
     * @dev Spend `amount` form the allowance of `owner` toward `spender`.
     *
     * Does not update the allowance amount in case of infinite allowance.
     * Revert if not enough allowance is available.
     *
     * Might emit an {Approval} event.
     */
    function _spendAllowance(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        uint256 currentAllowance = allowance(owner, spender);
        if (currentAllowance != type(uint256).max) {
            require(currentAllowance >= amount, "ERC20: insufficient allowance");
            unchecked {
                _approve(owner, spender, currentAllowance - amount);
            }
        }
    }

    /**
     * @dev Hook that is called before any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * will be transferred to `to`.
     * - when `from` is zero, `amount` tokens will be minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens will be burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}

    /**
     * @dev Hook that is called after any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * has been transferred to `to`.
     * - when `from` is zero, `amount` tokens have been minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens have been burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}
}
/*
  ReachToken essentially emulates Algorand Standard Assets on Ethereum, but doesn't include things like clawback or a separation of management and creator.
 */
contract ReachToken is ERC20 {
  address private _creator;
  string private _url;
  string private _metadata;
  uint8 private _decimals;

  constructor (
    string memory name_,
    string memory symbol_,
    string memory url_,
    string memory metadata_,
    uint256 supply_,
    uint256 decimals_
  ) ERC20(name_, symbol_) {
    _creator = _msgSender();
    _mint(_creator, supply_);
    _url = url_;
    _metadata = metadata_;
    _decimals = uint8(decimals_);
  }

  function url() public view returns (string memory) { return _url; }

  function metadata() public view returns (string memory) { return _metadata; }

  function decimals() public view override returns (uint8) { return _decimals; }

  function burn(uint256 amount) public virtual returns (bool) {
    require(_msgSender() == _creator, "must be creator");
    _burn(_creator, amount);
    return true;
  }

  function destroy() public virtual {
    require(_msgSender() == _creator, "must be creator");
    require(totalSupply() == 0, "must be no supply");
    selfdestruct(payable(_creator));
  }
}

// Generated code includes meaning of numbers
error ReachError(uint256 msg);

contract Stdlib {
  function safeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x + y) >= x, "add overflow"); }
  function safeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x - y) <= x, "sub wraparound"); }
  function safeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y == 0 || (z = x * y) / y == x, "mul overflow"); }
  function safeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x / y; }
  function safeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x % y; }

  function unsafeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x + y; } }
  function unsafeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x - y; } }
  function unsafeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x * y; } }
  function unsafeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x / y; } }
  function unsafeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x % y; } }

  function safeSqrt(uint256 y) internal pure returns (uint256 z) {
    if (y > 3) {
      z = y;
      uint256 x = y / 2 + 1;
      while (x < z) {
        z = x;
        x = (y / x + x) / 2;
      }
    } else if (y != 0) {
      z = 1;
    }
  }

  // From OpenZeppelin --- MIT license
  function uintToStringDyn(uint256 value) internal pure returns (string memory) {
        // Inspired by OraclizeAPI's implementation - MIT licence
        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol

        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }

  function reachRequire(bool succ, uint256 errMsg) internal pure {
    if ( ! succ ) {
      revert ReachError(errMsg);
    }
  }

  function checkFunReturn(bool succ, bytes memory returnData, uint256 errMsg) internal pure returns (bytes memory) {
    if (succ) {
      return returnData;
    } else {
      if (returnData.length > 0) {
        assembly {
          let returnData_size := mload(returnData)
          revert(add(32, returnData), returnData_size)
        }
      } else {
        revert ReachError(errMsg);
      }
    }
  }

  function tokenAllowance(address payable token, address owner, address spender) internal returns (uint256 amt) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.allowance.selector, owner, spender));
    checkFunReturn(ok, ret, 0 /*'token.allowance'*/);
    amt = abi.decode(ret, (uint256));
  }

  function tokenTransferFrom(address payable token, address sender, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transferFrom.selector, sender, recipient, amt));
    checkFunReturn(ok, ret, 1 /*'token.transferFrom'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenTransfer(address payable token, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transfer.selector, recipient, amt));
    checkFunReturn(ok, ret, 2 /*'token.transfer'*/);
    res = abi.decode(ret, (bool));
  }
  function safeTokenTransfer(address payable token, address recipient, uint256 amt) internal {
    require(tokenTransfer(token, recipient, amt));
  }

  function reachTokenBurn(address payable token, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.burn.selector, amt));
    checkFunReturn(ok, ret, 3 /*'token.burn'*/);
    res = abi.decode(ret, (bool));
  }
  function safeReachTokenBurn(address payable token, uint256 amt) internal {
    require(reachTokenBurn(token, amt));
  }

  function reachTokenDestroy(address payable token) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.destroy.selector));
    checkFunReturn(ok, ret, 4 /*'token.destroy'*/);
    res = true;
  }
  function safeReachTokenDestroy(address payable token) internal {
    require(reachTokenDestroy(token));
  }

  function readPayAmt(address sender, address payable token) internal returns (uint256 amt) {
    amt = tokenAllowance(token, sender, address(this));
    require(checkPayAmt(sender, token, amt));
  }

  function checkPayAmt(address sender, address payable token, uint256 amt) internal returns (bool) {
    return tokenTransferFrom(token, sender, address(this), amt);
  }

  function tokenApprove(address payable token, address spender, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.approve.selector, spender, amt));
    checkFunReturn(ok, ret, 5 /*'token.approve'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenBalanceOf(address payable token, address owner) internal returns (uint256 res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0) }(abi.encodeWithSelector(IERC20.balanceOf.selector, owner));
    checkFunReturn(ok, ret, 6 /*'token.balanceOf'*/);
    res = abi.decode(ret, (uint256));
  }
}

enum _enum_T0 {None, Some}
struct T0 {
  _enum_T0 which;
  bool _None;
  address payable _Some;
  }
enum _enum_T1 {None, Some}
struct T1 {
  _enum_T1 which;
  bool _None;
  uint256 _Some;
  }
enum _enum_T2 {None, Some}
struct T2 {
  _enum_T2 which;
  bool _None;
  bool _Some;
  }
struct T3 {
  bool didRefund;
  uint256 balance;
  }
struct T5 {
  uint256 elem0;
  uint256 elem1;
  }
struct T6 {
  bytes32 elem0;
  bytes32 elem1;
  bytes32 elem2;
  bytes32 elem3;
  bytes22 elem4;
  }
struct T7 {
  bytes32 elem0;
  bytes32 elem1;
  bytes32 elem2;
  bytes32 elem3;
  bytes32 elem4;
  bytes20 elem5;
  }
struct T8 {
  uint256 id;
  bytes25 title;
  T6 link;
  T7 description;
  address payable owner;
  address payable contractInfo;
  uint256 blockCreated;
  }
struct T9 {
  uint256 elem0;
  bool elem1;
  }
struct T10 {
  uint256 elem0;
  }
enum _enum_T11 {Voters_contribute0_90, Voters_downvote0_90, Voters_upvote0_90}
struct T11 {
  _enum_T11 which;
  T10 _Voters_contribute0_90;
  bool _Voters_downvote0_90;
  bool _Voters_upvote0_90;
  }
struct T12 {
  uint256 elem0;
  T11 elem1;
  }
struct T13 {
  T8 elem0;
  }
enum _enum_T14 {Voters_contributed0_454, Voters_created0_454, Voters_downvoted0_454, Voters_projectDown0_454, Voters_timedOut0_454, Voters_upvoted0_454}
struct T14 {
  _enum_T14 which;
  T5 _Voters_contributed0_454;
  T13 _Voters_created0_454;
  T5 _Voters_downvoted0_454;
  T10 _Voters_projectDown0_454;
  T5 _Voters_timedOut0_454;
  T5 _Voters_upvoted0_454;
  }
struct T15 {
  uint256 elem0;
  T14 elem1;
  }
struct T16 {
  uint256 elem0;
  T7 elem1;
  bool elem2;
  }
struct T17 {
  address payable v843;
  T7 v844;
  uint256 v846;
  }
struct T18 {
  bool elem0;
  uint256 elem1;
  }
struct T19 {
  uint256 elem0;
  bytes25 elem1;
  T6 elem2;
  address payable elem3;
  uint256 elem4;
  uint256 elem5;
  }
struct T20 {
  address payable elem0;
  address payable elem1;
  uint256 elem2;
  uint256 elem3;
  uint256 elem4;
  uint256 elem5;
  uint256 elem6;
  uint256 elem7;
  uint256 elem8;
  uint256 elem9;
  }
struct T21 {
  address payable v843;
  address payable v851;
  uint256 v852;
  uint256 v860;
  uint256 v862;
  uint256 v863;
  uint256 v864;
  uint256 v865;
  uint256 v872;
  }
struct T22 {
  address payable v843;
  address payable v851;
  uint256 v852;
  uint256 v860;
  uint256 v863;
  uint256 v864;
  uint256 v1108;
  uint256 v1109;
  uint256 v1116;
  }
contract ReachContract is Stdlib {
  uint256 current_step;
  uint256 current_time;
    bytes current_svbs;
  uint256 creation_time;
     bool locked;
  function _reachCreationTime() external view returns (uint256) { return creation_time; }
  function _reachCurrentTime() external view returns (uint256) { return current_time; }
  function _reachCurrentState() external view returns (uint256, bytes memory) { return (current_step, current_svbs); }
  event _reach_e0(address _who, T16 _a);
  event _reach_e1(address _who, T19 _a);
  event _reach_e3(address _who, T12 _a);
  event _reach_e4(address _who, T10 _a);
  event _reach_e6(address _who, T9 _a);
  event _reach_e8(address _who, T15 _a);
  event _reach_oe_v1015(uint256 v0);
  event _reach_oe_v1079(uint256 v0);
  event _reach_oe_v1151(T3 v0);
  event _reach_oe_v1161(T3 v0);
  event _reach_oe_v1307(bool v0);
  event _reach_oe_v1410(bool v0);
  event _reach_oe_v1526(bool v0);
  event _reach_oe_v1629(bool v0);
  event _reach_oe_v1733(bool v0);
  event _reach_oe_v1837(bool v0);
  event _reach_oe_v939(uint256 v0);
  event create(uint256 v0, bytes25 v1, T6 v2, T7 v3, address payable v4, address payable v5, uint256 v6);
  event created(uint256 v0, bytes25 v1, T6 v2, T7 v3, address payable v4, address payable v5, uint256 v6);
  event log(bytes20 v0, uint256 v1);
  event that(bytes20 v0, uint256 v1, uint256 v2);
  receive () external payable {}
  fallback () external payable {}
  mapping (address => T0) _reachm_0;
  function __reachm_0Ref(address addr) internal view returns (T0 memory res) {
    if (_reachm_0[addr].which == _enum_T0.Some) {
      res = _reachm_0[addr];
      }
    else {
      res.which = _enum_T0.None;
      res._None = false;
      }
    }
  function _reachm_0Ref(address addr) external view returns (T0 memory res) {
    res = __reachm_0Ref(addr);
    }
  mapping (address => T1) _reachm_1;
  function __reachm_1Ref(address addr) internal view returns (T1 memory res) {
    if (_reachm_1[addr].which == _enum_T1.Some) {
      res = _reachm_1[addr];
      }
    else {
      res.which = _enum_T1.None;
      res._None = false;
      }
    }
  function _reachm_1Ref(address addr) external view returns (T1 memory res) {
    res = __reachm_1Ref(addr);
    }
  mapping (address => T2) _reachm_2;
  function __reachm_2Ref(address addr) internal view returns (T2 memory res) {
    if (_reachm_2[addr].which == _enum_T2.Some) {
      res = _reachm_2[addr];
      }
    else {
      res.which = _enum_T2.None;
      res._None = false;
      }
    }
  function _reachm_2Ref(address addr) external view returns (T2 memory res) {
    res = __reachm_2Ref(addr);
    }
  struct Memory {
    bool nil;
    T3 _reachr_Voters_claimRefund;
    uint256 _reachr_Voters_contribute;
    bool _reachr_Voters_contributed;
    bool _reachr_Voters_created;
    uint256 _reachr_Voters_downvote;
    bool _reachr_Voters_downvoted;
    bool _reachr_Voters_projectDown;
    bool _reachr_Voters_timedOut;
    uint256 _reachr_Voters_upvote;
    bool _reachr_Voters_upvoted;
    }
  function Voters_claimRefund() external payable returns (T3 memory) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Voters_claimRefund(_ja, _Memory);
    return _Memory._reachr_Voters_claimRefund;
    }
  function Voters_contribute(uint256 v3354) external payable returns (uint256) {
    Memory memory _Memory;
    _reacha_Voters_contribute(v3354, _Memory);
    return _Memory._reachr_Voters_contribute;
    }
  function Voters_contributed(uint256 v3359, uint256 v3360) external payable returns (bool) {
    Memory memory _Memory;
    T5  memory _ja;
    _ja.elem0 = v3359;
    _ja.elem1 = v3360;
    _reacha_Voters_contributed(_ja, _Memory);
    return _Memory._reachr_Voters_contributed;
    }
  function Voters_created(T8 calldata v3365) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_Voters_created(v3365, _Memory);
    return _Memory._reachr_Voters_created;
    }
  function Voters_downvote() external payable returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Voters_downvote(_ja, _Memory);
    return _Memory._reachr_Voters_downvote;
    }
  function Voters_downvoted(uint256 v3374, uint256 v3375) external payable returns (bool) {
    Memory memory _Memory;
    T5  memory _ja;
    _ja.elem0 = v3374;
    _ja.elem1 = v3375;
    _reacha_Voters_downvoted(_ja, _Memory);
    return _Memory._reachr_Voters_downvoted;
    }
  function Voters_projectDown(uint256 v3380) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_Voters_projectDown(v3380, _Memory);
    return _Memory._reachr_Voters_projectDown;
    }
  function Voters_timedOut(uint256 v3385, uint256 v3386) external payable returns (bool) {
    Memory memory _Memory;
    T5  memory _ja;
    _ja.elem0 = v3385;
    _ja.elem1 = v3386;
    _reacha_Voters_timedOut(_ja, _Memory);
    return _Memory._reachr_Voters_timedOut;
    }
  function Voters_upvote() external payable returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Voters_upvote(_ja, _Memory);
    return _Memory._reachr_Voters_upvote;
    }
  function Voters_upvoted(uint256 v3395, uint256 v3396) external payable returns (bool) {
    Memory memory _Memory;
    T5  memory _ja;
    _ja.elem0 = v3395;
    _ja.elem1 = v3396;
    _reacha_Voters_upvoted(_ja, _Memory);
    return _Memory._reachr_Voters_upvoted;
    }
  struct _F3497 {
    bool v3352;
    }
  function _reacha_Voters_claimRefund(bool _a, Memory memory _Memory) internal  {
    _F3497 memory _f;
    T9  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v3352;
    _reachi_6(_ja, _Memory);
    }
  struct _F3498 {
    T10 v3356;
    T11 v3357;
    }
  function _reacha_Voters_contribute(uint256 _a, Memory memory _Memory) internal  {
    _F3498 memory _f;
    _f.v3356.elem0 = _a;
    _f.v3357.which = _enum_T11.Voters_contribute0_90;
    _f.v3357._Voters_contribute0_90 = _f.v3356;
    T12  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v3357;
    _reachi_3(_ja, _Memory);
    }
  struct _F3499 {
    T5 v3362;
    T14 v3363;
    }
  function _reacha_Voters_contributed(T5 memory _a, Memory memory _Memory) internal  {
    _F3499 memory _f;
    _f.v3362.elem0 = _a.elem0;
    _f.v3362.elem1 = _a.elem1;
    _f.v3363.which = _enum_T14.Voters_contributed0_454;
    _f.v3363._Voters_contributed0_454 = _f.v3362;
    T15  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v3363;
    _reachi_8(_ja, _Memory);
    }
  struct _F3500 {
    T13 v3367;
    T14 v3368;
    }
  function _reacha_Voters_created(T8 memory _a, Memory memory _Memory) internal  {
    _F3500 memory _f;
    _f.v3367.elem0 = _a;
    _f.v3368.which = _enum_T14.Voters_created0_454;
    _f.v3368._Voters_created0_454 = _f.v3367;
    T15  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v3368;
    _reachi_8(_ja, _Memory);
    }
  struct _F3501 {
    bool v3371;
    T11 v3372;
    }
  function _reacha_Voters_downvote(bool _a, Memory memory _Memory) internal  {
    _F3501 memory _f;
    _f.v3372.which = _enum_T11.Voters_downvote0_90;
    _f.v3372._Voters_downvote0_90 = _f.v3371;
    T12  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v3372;
    _reachi_3(_ja, _Memory);
    }
  struct _F3502 {
    T5 v3377;
    T14 v3378;
    }
  function _reacha_Voters_downvoted(T5 memory _a, Memory memory _Memory) internal  {
    _F3502 memory _f;
    _f.v3377.elem0 = _a.elem0;
    _f.v3377.elem1 = _a.elem1;
    _f.v3378.which = _enum_T14.Voters_downvoted0_454;
    _f.v3378._Voters_downvoted0_454 = _f.v3377;
    T15  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v3378;
    _reachi_8(_ja, _Memory);
    }
  struct _F3503 {
    T10 v3382;
    T14 v3383;
    }
  function _reacha_Voters_projectDown(uint256 _a, Memory memory _Memory) internal  {
    _F3503 memory _f;
    _f.v3382.elem0 = _a;
    _f.v3383.which = _enum_T14.Voters_projectDown0_454;
    _f.v3383._Voters_projectDown0_454 = _f.v3382;
    T15  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v3383;
    _reachi_8(_ja, _Memory);
    }
  struct _F3504 {
    T5 v3388;
    T14 v3389;
    }
  function _reacha_Voters_timedOut(T5 memory _a, Memory memory _Memory) internal  {
    _F3504 memory _f;
    _f.v3388.elem0 = _a.elem0;
    _f.v3388.elem1 = _a.elem1;
    _f.v3389.which = _enum_T14.Voters_timedOut0_454;
    _f.v3389._Voters_timedOut0_454 = _f.v3388;
    T15  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v3389;
    _reachi_8(_ja, _Memory);
    }
  struct _F3505 {
    bool v3392;
    T11 v3393;
    }
  function _reacha_Voters_upvote(bool _a, Memory memory _Memory) internal  {
    _F3505 memory _f;
    _f.v3393.which = _enum_T11.Voters_upvote0_90;
    _f.v3393._Voters_upvote0_90 = _f.v3392;
    T12  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v3393;
    _reachi_3(_ja, _Memory);
    }
  struct _F3506 {
    T5 v3398;
    T14 v3399;
    }
  function _reacha_Voters_upvoted(T5 memory _a, Memory memory _Memory) internal  {
    _F3506 memory _f;
    _f.v3398.elem0 = _a.elem0;
    _f.v3398.elem1 = _a.elem1;
    _f.v3399.which = _enum_T14.Voters_upvoted0_454;
    _f.v3399._Voters_upvoted0_454 = _f.v3398;
    T15  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v3399;
    _reachi_8(_ja, _Memory);
    }
  function _reachi_0(T16 memory _a, Memory memory _Memory) internal  {
    reachRequire((! locked), uint256(7) /*'locked'*/);
    emit _reach_e0(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(8) /*'time check at ./src/contracts/index.rsh:85:12:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(9) /*'(./src/contracts/index.rsh:85:12:dot,[],"verify network token pay amount")'*/);
    if ((_a.elem2)) {
      T17 memory nsvs;
      nsvs.v843 = payable(msg.sender);
      nsvs.v844 = (_a.elem1);
      nsvs.v846 = uint256(block.number);
      current_step = uint256(1);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      T18  memory _ja;
      _ja.elem0 = (true);
      _ja.elem1 = (uint256(block.number));
      _reachl_7(_ja, _Memory);
      }
    }
  function _reachi_1(T19 memory _a, Memory memory _Memory) internal  {
    reachRequire((! locked), uint256(10) /*'locked'*/);
    emit _reach_e1(msg.sender, _a);
    reachRequire((current_step == uint256(1)), uint256(11) /*'state check at ./src/contracts/index.rsh:89:14:dot'*/);
    (T17 memory _svs) = abi.decode(current_svbs, (T17));
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(12) /*'time check at ./src/contracts/index.rsh:89:14:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(13) /*'(./src/contracts/index.rsh:89:14:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v843 == payable(msg.sender))), uint256(14) /*'(./src/contracts/index.rsh:89:14:dot,[],Just "sender correct")'*/);
    emit created( (_a.elem4),  (_a.elem1),  (_a.elem2),  _svs.v844,  (_a.elem3),  (payable(address(this))),  (uint256(block.number)));
    T20  memory _ja;
    _ja.elem0 = _svs.v843;
    _ja.elem1 = (_a.elem3);
    _ja.elem2 = (_a.elem4);
    _ja.elem3 = (safeAdd(_svs.v846, (_a.elem5)));
    _ja.elem4 = (uint256(0));
    _ja.elem5 = (uint256(0));
    _ja.elem6 = (uint256(0));
    _ja.elem7 = (uint256(block.number));
    _ja.elem8 = (_svs.v846);
    _ja.elem9 = (uint256(0));
    _reachl_2(_ja, _Memory);
    }
  struct _F3509 {
    T10 v922;
    uint256 v933;
    uint256 v950;
    uint256 v952;
    uint256 v1015;
    uint256 v1079;
    }
  function _reachi_3(T12 memory _a, Memory memory _Memory) internal  {
    _F3509 memory _f;
    reachRequire((! locked), uint256(15) /*'locked'*/);
    emit _reach_e3(msg.sender, _a);
    reachRequire((current_step == uint256(4)), uint256(16) /*'state check at ./src/contracts/index.rsh:104:56:dot'*/);
    (T21 memory _svs) = abi.decode(current_svbs, (T21));
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(17) /*'time check at ./src/contracts/index.rsh:104:56:dot'*/);
    reachRequire((uint256(block.number) < _svs.v860), uint256(18) /*'timeout check at ./src/contracts/index.rsh:104:56:dot'*/);
    if ((_a.elem1).which == _enum_T11.Voters_contribute0_90) {
    _f.v922 = (_a.elem1)._Voters_contribute0_90;
    reachRequire((((_f.v922.elem0) > uint256(0))), uint256(19) /*'(reach standard library:57:5:application,[at ./src/contracts/index.rsh:116:14:application call to "check" (defined at: reach standard library:49:32:function exp),at ./src/contracts/index.rsh:115:38:application call to [unknown function] (defined at: ./src/contracts/index.rsh:115:38:function exp),at ./src/contracts/index.rsh:104:56:application call to [unknown function] (defined at: ./src/contracts/index.rsh:115:38:function exp),at ./src/contracts/index.rsh:104:56:application call to [unknown function] (defined at: ./src/contracts/index.rsh:104:56:function exp)],Just "Contribution too small")'*/);
    _f.v933 = unsafeAdd(_svs.v872, (_f.v922.elem0));
    reachRequire((msg.value == (_f.v922.elem0)), uint256(20) /*'(./src/contracts/index.rsh:104:56:dot,[],"verify network token pay amount")'*/);
    emit _reach_oe_v939( (_f.v933));
    _Memory._reachr_Voters_contribute = (_f.v933);
    if (((uint256((__reachm_2Ref(payable(msg.sender))).which)) == uint256(1))) {
      if ((__reachm_1Ref(payable(msg.sender))).which == _enum_T1.None) {
      _f.v950 = uint256(0);
      } else if ((__reachm_1Ref(payable(msg.sender))).which == _enum_T1.Some) {
      _f.v952 = (__reachm_1Ref(payable(msg.sender)))._Some;
      _f.v950 = _f.v952;
      }
      _reachm_1[payable(msg.sender)].which = _enum_T1.Some;
      _reachm_1[payable(msg.sender)]._Some = (safeAdd(_f.v950, (_f.v922.elem0)));
      
      T20  memory _ja;
      _ja.elem0 = _svs.v843;
      _ja.elem1 = _svs.v851;
      _ja.elem2 = _svs.v852;
      _ja.elem3 = _svs.v860;
      _ja.elem4 = ((safeAdd(_svs.v862, (_f.v922.elem0))));
      _ja.elem5 = (_svs.v863);
      _ja.elem6 = (_svs.v864);
      _ja.elem7 = (uint256(block.number));
      _ja.elem8 = (_svs.v865);
      _ja.elem9 = (_f.v933);
      _reachl_2(_ja, _Memory);
      }
    else {
      _reachm_0[payable(msg.sender)].which = _enum_T0.Some;
      _reachm_0[payable(msg.sender)]._Some = payable(msg.sender);
      
      _reachm_1[payable(msg.sender)].which = _enum_T1.Some;
      _reachm_1[payable(msg.sender)]._Some = (_f.v922.elem0);
      
      _reachm_2[payable(msg.sender)].which = _enum_T2.Some;
      _reachm_2[payable(msg.sender)]._Some = false;
      
      T20  memory _ja;
      _ja.elem0 = _svs.v843;
      _ja.elem1 = _svs.v851;
      _ja.elem2 = _svs.v852;
      _ja.elem3 = _svs.v860;
      _ja.elem4 = ((safeAdd(_svs.v862, (_f.v922.elem0))));
      _ja.elem5 = (_svs.v863);
      _ja.elem6 = (_svs.v864);
      _ja.elem7 = (uint256(block.number));
      _ja.elem8 = (_svs.v865);
      _ja.elem9 = (_f.v933);
      _reachl_2(_ja, _Memory);
      }
    } else if ((_a.elem1).which == _enum_T11.Voters_downvote0_90) {
    reachRequire((msg.value == uint256(0)), uint256(21) /*'(./src/contracts/index.rsh:104:56:dot,[],"verify network token pay amount")'*/);
    _f.v1015 = safeAdd(_svs.v863, uint256(1));
    emit _reach_oe_v1015( _f.v1015);
    _Memory._reachr_Voters_downvote = _f.v1015;
    T20  memory _ja;
    _ja.elem0 = _svs.v843;
    _ja.elem1 = _svs.v851;
    _ja.elem2 = _svs.v852;
    _ja.elem3 = _svs.v860;
    _ja.elem4 = (_svs.v862);
    _ja.elem5 = (_f.v1015);
    _ja.elem6 = (_svs.v864);
    _ja.elem7 = (uint256(block.number));
    _ja.elem8 = (_svs.v865);
    _ja.elem9 = (_svs.v872);
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T11.Voters_upvote0_90) {
    reachRequire((msg.value == uint256(0)), uint256(22) /*'(./src/contracts/index.rsh:104:56:dot,[],"verify network token pay amount")'*/);
    _f.v1079 = safeAdd(_svs.v864, uint256(1));
    emit _reach_oe_v1079( _f.v1079);
    _Memory._reachr_Voters_upvote = _f.v1079;
    T20  memory _ja;
    _ja.elem0 = _svs.v843;
    _ja.elem1 = _svs.v851;
    _ja.elem2 = _svs.v852;
    _ja.elem3 = _svs.v860;
    _ja.elem4 = (_svs.v862);
    _ja.elem5 = (_svs.v863);
    _ja.elem6 = (_f.v1079);
    _ja.elem7 = (uint256(block.number));
    _ja.elem8 = (_svs.v865);
    _ja.elem9 = (_svs.v872);
    _reachl_2(_ja, _Memory);
    }
    }
  struct _F3510 {
    bytes20 v1095;
    uint256 v1100;
    bytes20 v1106;
    bytes20 v1174;
    }
  function _reachi_4(T10 memory _a, Memory memory _Memory) internal  {
    _F3510 memory _f;
    reachRequire((! locked), uint256(23) /*'locked'*/);
    emit _reach_e4(msg.sender, _a);
    reachRequire((current_step == uint256(4)), uint256(24) /*'state check at ./src/contracts/index.rsh:140:18:dot'*/);
    (T21 memory _svs) = abi.decode(current_svbs, (T21));
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(25) /*'time check at ./src/contracts/index.rsh:140:18:dot'*/);
    reachRequire((uint256(block.number) >= _svs.v860), uint256(26) /*'timeout check at ./src/contracts/index.rsh:140:18:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(27) /*'(./src/contracts/index.rsh:140:18:dot,[at ./src/contracts/index.rsh:139:36:application call to [unknown function] (defined at: ./src/contracts/index.rsh:139:36:function exp)],"verify network token pay amount")'*/);
    reachRequire(((_svs.v843 == payable(msg.sender))), uint256(28) /*'(./src/contracts/index.rsh:140:18:dot,[at ./src/contracts/index.rsh:139:36:application call to [unknown function] (defined at: ./src/contracts/index.rsh:139:36:function exp)],Just "sender correct")'*/);
    if ((((_svs.v863 > _svs.v864) ? uint256(0) : ((_svs.v864 == _svs.v863) ? uint256(0) : uint256(1))) == uint256(1))) {
      _f.v1095 = hex'7061737365640000000000000000000000000000';
      emit log( _f.v1095,  _svs.v852);
      _f.v1100 = unsafeSub(_svs.v872, _svs.v872);
      _svs.v851.transfer(_svs.v872);
      T20  memory _ja;
      _ja.elem0 = _svs.v843;
      _ja.elem1 = _svs.v851;
      _ja.elem2 = _svs.v852;
      _ja.elem3 = _svs.v860;
      _ja.elem4 = (_f.v1100);
      _ja.elem5 = (_svs.v863);
      _ja.elem6 = (_svs.v864);
      _ja.elem7 = (uint256(block.number));
      _ja.elem8 = (_svs.v865);
      _ja.elem9 = (_f.v1100);
      _reachl_2(_ja, _Memory);
      }
    else {
      if ((_svs.v872 > uint256(0))) {
        _f.v1106 = hex'6661696c65640000000000000000000000000000';
        emit log( _f.v1106,  _svs.v852);
        T20  memory _ja;
        _ja.elem0 = _svs.v843;
        _ja.elem1 = _svs.v851;
        _ja.elem2 = _svs.v852;
        _ja.elem3 = _svs.v860;
        _ja.elem4 = _svs.v863;
        _ja.elem5 = _svs.v864;
        _ja.elem6 = (_svs.v872);
        _ja.elem7 = (uint256(block.number));
        _ja.elem8 = (_svs.v865);
        _ja.elem9 = (_svs.v872);
        _reachl_5(_ja, _Memory);
        }
      else {
        _f.v1174 = hex'646f776e00000000000000000000000000000000';
        emit log( _f.v1174,  _svs.v852);
        T20  memory _ja;
        _ja.elem0 = _svs.v843;
        _ja.elem1 = _svs.v851;
        _ja.elem2 = _svs.v852;
        _ja.elem3 = _svs.v860;
        _ja.elem4 = (_svs.v872);
        _ja.elem5 = (_svs.v863);
        _ja.elem6 = (_svs.v864);
        _ja.elem7 = (uint256(block.number));
        _ja.elem8 = (_svs.v865);
        _ja.elem9 = (_svs.v872);
        _reachl_2(_ja, _Memory);
        }
      }
    }
  struct _F3511 {
    uint256 v1131;
    uint256 v1133;
    address payable v1141;
    address payable v1143;
    bytes20 v1149;
    uint256 v1150;
    T3 v1151;
    bytes20 v1160;
    T3 v1161;
    }
  function _reachi_6(T9 memory _a, Memory memory _Memory) internal  {
    _F3511 memory _f;
    reachRequire((! locked), uint256(29) /*'locked'*/);
    emit _reach_e6(msg.sender, _a);
    reachRequire((current_step == uint256(6)), uint256(30) /*'state check at ./src/contracts/index.rsh:159:50:dot'*/);
    (T22 memory _svs) = abi.decode(current_svbs, (T22));
    _a.elem1;
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(31) /*'time check at ./src/contracts/index.rsh:159:50:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(32) /*'(./src/contracts/index.rsh:159:50:dot,[at ./src/contracts/index.rsh:139:36:application call to [unknown function] (defined at: ./src/contracts/index.rsh:139:36:function exp)],"verify network token pay amount")'*/);
    if ((__reachm_1Ref(payable(msg.sender))).which == _enum_T1.None) {
    _f.v1131 = uint256(0);
    } else if ((__reachm_1Ref(payable(msg.sender))).which == _enum_T1.Some) {
    _f.v1133 = (__reachm_1Ref(payable(msg.sender)))._Some;
    _f.v1131 = _f.v1133;
    }
    if (((_svs.v1116 >= _f.v1131) ? ((uint256((__reachm_2Ref(payable(msg.sender))).which)) == uint256(1)) : false)) {
      if ((__reachm_0Ref(payable(msg.sender))).which == _enum_T0.None) {
      _f.v1141 = _svs.v843;
      } else if ((__reachm_0Ref(payable(msg.sender))).which == _enum_T0.Some) {
      _f.v1143 = (__reachm_0Ref(payable(msg.sender)))._Some;
      _f.v1141 = _f.v1143;
      }
      _f.v1141.transfer(_f.v1131);
      delete _reachm_2[payable(msg.sender)];
      _f.v1149 = hex'726566756e645061737365640000000000000000';
      emit log( _f.v1149,  _svs.v852);
      _f.v1150 = safeSub(_svs.v1108, _f.v1131);
      _f.v1151.didRefund = true;
      _f.v1151.balance = _f.v1150;
      emit _reach_oe_v1151( _f.v1151);
      _Memory._reachr_Voters_claimRefund = _f.v1151;
      T20  memory _ja;
      _ja.elem0 = _svs.v843;
      _ja.elem1 = _svs.v851;
      _ja.elem2 = _svs.v852;
      _ja.elem3 = _svs.v860;
      _ja.elem4 = _svs.v863;
      _ja.elem5 = _svs.v864;
      _ja.elem6 = (_f.v1150);
      _ja.elem7 = (uint256(block.number));
      _ja.elem8 = (_svs.v1109);
      _ja.elem9 = ((unsafeSub(_svs.v1116, _f.v1131)));
      _reachl_5(_ja, _Memory);
      }
    else {
      _f.v1160 = hex'726566756e644661696c65640000000000000000';
      emit log( _f.v1160,  _svs.v852);
      _f.v1161.didRefund = false;
      _f.v1161.balance = _svs.v1108;
      emit _reach_oe_v1161( _f.v1161);
      _Memory._reachr_Voters_claimRefund = _f.v1161;
      T20  memory _ja;
      _ja.elem0 = _svs.v843;
      _ja.elem1 = _svs.v851;
      _ja.elem2 = _svs.v852;
      _ja.elem3 = _svs.v860;
      _ja.elem4 = _svs.v863;
      _ja.elem5 = _svs.v864;
      _ja.elem6 = (_svs.v1108);
      _ja.elem7 = (uint256(block.number));
      _ja.elem8 = (_svs.v1109);
      _ja.elem9 = (_svs.v1116);
      _reachl_5(_ja, _Memory);
      }
    }
  struct _F3512 {
    T5 v1294;
    bytes20 v1315;
    T13 v1386;
    T5 v1478;
    bytes20 v1534;
    T10 v1570;
    bytes20 v1636;
    T5 v1662;
    bytes20 v1741;
    T5 v1754;
    bytes20 v1845;
    }
  function _reachi_8(T15 memory _a, Memory memory _Memory) internal  {
    _F3512 memory _f;
    reachRequire((! locked), uint256(33) /*'locked'*/);
    emit _reach_e8(msg.sender, _a);
    reachRequire((current_step == uint256(9)), uint256(34) /*'state check at ./src/contracts/index.rsh:197:37:dot'*/);
    (bool _svs) = abi.decode(current_svbs, (bool));
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(35) /*'time check at ./src/contracts/index.rsh:197:37:dot'*/);
    if ((_a.elem1).which == _enum_T14.Voters_contributed0_454) {
    _f.v1294 = (_a.elem1)._Voters_contributed0_454;
    reachRequire((msg.value == uint256(0)), uint256(36) /*'(./src/contracts/index.rsh:197:37:dot,[],"verify network token pay amount")'*/);
    emit _reach_oe_v1307( (false));
    _Memory._reachr_Voters_contributed = (false);
    _f.v1315 = hex'636f6e7472696275746564000000000000000000';
    emit that( _f.v1315,  (_f.v1294.elem0),  (_f.v1294.elem1));
    T18  memory _ja;
    _ja.elem0 = (true);
    _ja.elem1 = (uint256(block.number));
    _reachl_7(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T14.Voters_created0_454) {
    _f.v1386 = (_a.elem1)._Voters_created0_454;
    reachRequire((msg.value == uint256(0)), uint256(37) /*'(./src/contracts/index.rsh:197:37:dot,[],"verify network token pay amount")'*/);
    emit _reach_oe_v1410( (false));
    _Memory._reachr_Voters_created = (false);
    emit create( ((_f.v1386.elem0).id),  ((_f.v1386.elem0).title),  ((_f.v1386.elem0).link),  ((_f.v1386.elem0).description),  ((_f.v1386.elem0).owner),  ((_f.v1386.elem0).contractInfo),  ((_f.v1386.elem0).blockCreated));
    T18  memory _ja;
    _ja.elem0 = (true);
    _ja.elem1 = (uint256(block.number));
    _reachl_7(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T14.Voters_downvoted0_454) {
    _f.v1478 = (_a.elem1)._Voters_downvoted0_454;
    reachRequire((msg.value == uint256(0)), uint256(38) /*'(./src/contracts/index.rsh:197:37:dot,[],"verify network token pay amount")'*/);
    emit _reach_oe_v1526( (false));
    _Memory._reachr_Voters_downvoted = (false);
    _f.v1534 = hex'646f776e766f7465640000000000000000000000';
    emit that( _f.v1534,  (_f.v1478.elem0),  (_f.v1478.elem1));
    T18  memory _ja;
    _ja.elem0 = (true);
    _ja.elem1 = (uint256(block.number));
    _reachl_7(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T14.Voters_projectDown0_454) {
    _f.v1570 = (_a.elem1)._Voters_projectDown0_454;
    reachRequire((msg.value == uint256(0)), uint256(39) /*'(./src/contracts/index.rsh:197:37:dot,[],"verify network token pay amount")'*/);
    emit _reach_oe_v1629( (false));
    _Memory._reachr_Voters_projectDown = (false);
    _f.v1636 = hex'70726f6a656374446f776e000000000000000000';
    emit that( _f.v1636,  (_f.v1570.elem0),  (uint256(0)));
    T18  memory _ja;
    _ja.elem0 = (true);
    _ja.elem1 = (uint256(block.number));
    _reachl_7(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T14.Voters_timedOut0_454) {
    _f.v1662 = (_a.elem1)._Voters_timedOut0_454;
    reachRequire((msg.value == uint256(0)), uint256(40) /*'(./src/contracts/index.rsh:197:37:dot,[],"verify network token pay amount")'*/);
    emit _reach_oe_v1733( (false));
    _Memory._reachr_Voters_timedOut = (false);
    _f.v1741 = hex'74696d65644f7574000000000000000000000000';
    emit that( _f.v1741,  (_f.v1662.elem0),  (_f.v1662.elem1));
    T18  memory _ja;
    _ja.elem0 = (true);
    _ja.elem1 = (uint256(block.number));
    _reachl_7(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T14.Voters_upvoted0_454) {
    _f.v1754 = (_a.elem1)._Voters_upvoted0_454;
    reachRequire((msg.value == uint256(0)), uint256(41) /*'(./src/contracts/index.rsh:197:37:dot,[],"verify network token pay amount")'*/);
    emit _reach_oe_v1837( (false));
    _Memory._reachr_Voters_upvoted = (false);
    _f.v1845 = hex'7570766f74656400000000000000000000000000';
    emit that( _f.v1845,  (_f.v1754.elem0),  (_f.v1754.elem1));
    T18  memory _ja;
    _ja.elem0 = (true);
    _ja.elem1 = (uint256(block.number));
    _reachl_7(_ja, _Memory);
    }
    }
  function _reachl_2(T20 memory _a, Memory memory _Memory) internal  {
    if ((_a.elem3 > _a.elem8)) {
      T21 memory nsvs;
      nsvs.v843 = _a.elem0;
      nsvs.v851 = _a.elem1;
      nsvs.v852 = _a.elem2;
      nsvs.v860 = _a.elem3;
      nsvs.v862 = _a.elem4;
      nsvs.v863 = _a.elem5;
      nsvs.v864 = _a.elem6;
      nsvs.v865 = _a.elem7;
      nsvs.v872 = _a.elem9;
      current_step = uint256(4);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      _a.elem0.transfer(_a.elem9);
      current_step = 0x0;
      current_time = 0x0;
      delete current_svbs;
      }
    }
  struct _F3514 {
    bytes20 v1170;
    }
  function _reachl_5(T20 memory _a, Memory memory _Memory) internal  {
    _F3514 memory _f;
    if ((_a.elem6 > uint256(0))) {
      T22 memory nsvs;
      nsvs.v843 = _a.elem0;
      nsvs.v851 = _a.elem1;
      nsvs.v852 = _a.elem2;
      nsvs.v860 = _a.elem3;
      nsvs.v863 = _a.elem4;
      nsvs.v864 = _a.elem5;
      nsvs.v1108 = _a.elem6;
      nsvs.v1109 = _a.elem7;
      nsvs.v1116 = _a.elem9;
      current_step = uint256(6);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      _f.v1170 = hex'646f776e00000000000000000000000000000000';
      emit log( _f.v1170,  _a.elem2);
      T20  memory _ja;
      _ja.elem0 = _a.elem0;
      _ja.elem1 = _a.elem1;
      _ja.elem2 = _a.elem2;
      _ja.elem3 = _a.elem3;
      _ja.elem4 = (_a.elem9);
      _ja.elem5 = (_a.elem4);
      _ja.elem6 = (_a.elem5);
      _ja.elem7 = (_a.elem7);
      _ja.elem8 = (_a.elem8);
      _ja.elem9 = (_a.elem9);
      _reachl_2(_ja, _Memory);
      }
    }
  function _reachl_7(T18 memory _a, Memory memory _Memory) internal  {
    if (_a.elem0) {
      bool nsvs;
      current_step = uint256(9);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      current_step = 0x0;
      current_time = 0x0;
      delete current_svbs;
      }
    }
  constructor(T16 memory v3402) payable {
    current_step = 0x0;
    creation_time = uint256(block.number);
    Memory memory _Memory;
    _reachi_0(v3402, _Memory);
    }
  function _reachp_1(T19 calldata v3406) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_1(v3406, _Memory);
    }
  function _reachp_3(T12 calldata v3414) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_3(v3414, _Memory);
    }
  function _reachp_4(T10 calldata v3440) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_4(v3440, _Memory);
    }
  function _reachp_6(T9 calldata v3464) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_6(v3464, _Memory);
    }
  function _reachp_8(T15 calldata v3474) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_8(v3474, _Memory);
    }
  }
