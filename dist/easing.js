/**
 * Various fast approximations and alternates to cubic-bezier easing functions.
 * http://www.w3.org/TR/css3-transitions/#transition-timing-function
 */

'use strict';

/**
 * @const
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
var EASE_IN_OUT_CONST = 0.5 * Math.pow(0.5, 1.925);

exports.default = {
  /**
   * @param x {number} the value of x along the curve, 0.0 <= x <= 1.0
   * @return {number} the y value along the curve
   */
  linear: function linear(x) {
    return x;
  },

  //		/**
  //		 * @param x {number} the value of x along the curve, 0.0 <= x <= 1.0
  //		 * @return {number} the y value along the curve
  //		 */
  //		ease: function(x) {
  //			// TODO: find fast approximations
  //			return x;
  //		},

  /**
   * @param x {number} the value of x along the curve, 0.0 <= x <= 1.0
   * @return {number} the y value along the curve
   */
  easeInApprox: function easeInApprox(x) {
    // very close approximation to cubic-bezier(0.42, 0, 1.0, 1.0)
    return Math.pow(x, 1.685);
  },

  /**
   * @param x {number} the value of x along the curve, 0.0 <= x <= 1.0
   * @return {number} the y value along the curve
   */
  easeInQuadratic: function easeInQuadratic(x) {
    return x * x;
  },

  /**
   * @param x {number} the value of x along the curve, 0.0 <= x <= 1.0
   * @return {number} the y value along the curve
   */
  easeInCubic: function easeInCubic(x) {
    return x * x * x;
  },

  /**
   * @param x {number} the value of x along the curve, 0.0 <= x <= 1.0
   * @return {number} the y value along the curve
   */
  easeOutApprox: function easeOutApprox(x) {
    // very close approximation to cubic-bezier(0, 0, 0.58, 1.0)
    return 1 - Math.pow(1 - x, 1.685);
  },

  /**
   * @param x {number} the value of x along the curve, 0.0 <= x <= 1.0
   * @return {number} the y value along the curve
   */
  easeOutQuadratic: function easeOutQuadratic(x) {
    x -= 1;
    return 1 - x * x;
  },

  /**
   * @param x {number} the value of x along the curve, 0.0 <= x <= 1.0
   * @return {number} the y value along the curve
   */
  easeOutCubic: function easeOutCubic(x) {
    x -= 1;
    return 1 + x * x * x;
  },

  /**
   * @param x {number} the value of x along the curve, 0.0 <= x <= 1.0
   * @return {number} the y value along the curve
   */
  easeInOutApprox: function easeInOutApprox(x) {
    // very close approximation to cubic-bezier(0.42, 0, 0.58, 1.0)
    if (x < 0.5) {
      return EASE_IN_OUT_CONST * Math.pow(x, 1.925);
    } else {
      return 1 - EASE_IN_OUT_CONST * Math.pow(1 - x, 1.925);
    }
  },

  /**
   * @param x {number} the value of x along the curve, 0.0 <= x <= 1.0
   * @return {number} the y value along the curve
   */
  easeInOutQuadratic: function easeInOutQuadratic(x) {
    if (x < 0.5) {
      return 2 * x * x;
    } else {
      x -= 1;
      return 1 - 2 * x * x;
    }
  },

  /**
   * @param x {number} the value of x along the curve, 0.0 <= x <= 1.0
   * @return {number} the y value along the curve
   */
  easeInOutCubic: function easeInOutCubic(x) {
    if (x < 0.5) {
      return 4 * x * x * x;
    } else {
      x -= 1;
      return 1 + 4 * x * x * x;
    }
  },

  /**
   * @param x {number} the value of x along the curve, 0.0 <= x <= 1.0
   * @return {number} the y value along the curve
   */
  easeInOutQuartic: function easeInOutQuartic(x) {
    if (x < 0.5) {
      return 8 * x * x * x * x;
    } else {
      x -= 1;
      return 1 + 8 * x * x * x * x;
    }
  },

  /**
   * @param x {number} the value of x along the curve, 0.0 <= x <= 1.0
   * @return {number} the y value along the curve
   */
  easeInOutQuintic: function easeInOutQuintic(x) {
    if (x < 0.5) {
      return 16 * x * x * x * x * x;
    } else {
      x -= 1;
      return 1 + 16 * x * x * x * x * x;
    }
  }
};
