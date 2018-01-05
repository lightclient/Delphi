/* eslint-env mocha */
/* global contract */

contract('DelphiStake', () => {
  describe('Function: finalizeWithdrawStake', () => {
    it('should revert if called by any entity other than the staker');
    it('should revert if the lockupEnding time has not passed');
    it('should revert if there are open claims against the stake');
    it('should transfer the entire stake amount to the staker');
    it('should set stake to zero');
    it('should emit a StakeWithdrawn event');
  });
});

