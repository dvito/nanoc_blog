class Fixnum
  def fizzbuzz
    self % 15 == 0 ? "FizzBuzz" :
      self % 5 == 0 ? "Buzz" :
        self % 3 == 0 ? "Fizz" : self
  end
end

(1..100).each do |num|
  puts num.fizzbuzz
end