/**
 * Created by hxsd on 2016/10/13.
 */
//计算月还款本息的工具对象
var loanTool = {
    /**
     * 计算并返回月还款本息的方法(返回“月均还款”值)
     * @param loanAmount            贷款本金(也就是贷了多少款-贷款总额，比如，70万)
     * @param months                还款月数(也就是贷款周期，如20年，则此处为240个月)
     * @param annualInterestRate    年利率(比如，6.55%，则此处传入为6.55,应除以100以后转为0.0665再进行计算)
     */
    getPaymentsPerMonth: function (loanAmount, months, annualInterestRate) {
        var rateOfMonth = annualInterestRate / (12 * 100);
        return (loanAmount * rateOfMonth * Math.pow((1 + rateOfMonth), months)) / (Math.pow((1 + rateOfMonth), months) - 1);
    }
};

// 贷款利率
var loanRate = [
    ["6.80", "6.55", "6.15", "5.90"],       // 商业贷款利率，不同日期的贷款利率
    ["4.70", "4.50", "4.25", "4.00"]        // 公积金贷款利率，不同日期的贷款利率
];