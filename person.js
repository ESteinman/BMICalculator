class Person
attr_accessor :bmi_value, :bmi_message, :weight, :height

def initalize(options={})
@weight = options[:weight]
@height = options[:height]
end

def calculate_bmi_met
results = BMICalculator.metric_bmi(self)
end
end

module BMICalculator
def self.metric_bmi(object)
weight = object.weight.to_f
height = object.height.to_f

if weight > 0 && height > 0
final_bmi = weight / (height / 100 * height / 100)
object.bmi_value(object) = final_bmi.round(2)
set_bmi_message(object)
end
end

def self.set_bmi_message(object)
if object.bmi_value < 18.5 